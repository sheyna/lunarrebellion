var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var router = express.Router();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Shuffle Source: https://css-tricks.com/snippets/javascript/shuffle-array/
function shuffle(arr) {
  for(let j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
  return arr;
};

var tiles = [
  {"title": "Lavana's Throne Room", "id": "lavanaThroneRoom"},
  {"title": "Central Dais", "id": "centralDais"},
  {"title": "Jacin's Private Quarters", "id": "jacinsQuarters"},
  {"title": "Winter's room", "id": "wintersRoom"},
  {"title": "Royal Port of Artemisia", "id": "royalPortOfArtemisia"},
  {"title": "Queen's Solar", "id": "queensSolar"},
  {"title": "Atrium", "id": "atrium"},
  {"title": "Menagerie", "id": "menagerie"},
  {"title": "TV Studio", "id": "tvStudio"},
  {"title": "Lava Tube 1", "id": "lavaTube1"},
  {"title": "Lava Tube 2", "id": "lavaTube2"},
  {"title": "Lava Tube 3", "id": "lavaTube3"},
  {"title": "Lava Tube 4", "id": "lavaTube4"},
  {"title": "Lava Tube 5", "id": "lavaTube5"},
  {"title": "Lava Tube 6", "id": "lavaTube6"},
  {"title": "Maglev Platform 1", "id": "maglevPlatform1"},
  {"title": "Maglev Platform 2", "id": "maglevPlatform2"},
  {"title": "Maglev Platform 3", "id": "maglevPlatform3"},
  {"title": "Maglev Platform 4", "id": "maglevPlatform4"},
  {"title": "Maglev Platform 5", "id": "maglevPlatform5"},
  {"title": "Maglev Platform 6", "id": "maglevPlatform6"},
  {"title": "Outer Sector: GC-6", "id": "outerSectorGC6"},
  {"title": "Outer Sector: LW-12", "id": "outerSectorLW12"},
  {"title": "Outer Sector: RM-9", "id": "outerSectorRM9"},
  {"title": "Outer Sector: RD-1", "id": "outerSectorRD1"},
  {"title": "Outer Sector: RD-4", "id": "outerSectorRD4"},
  {"title": "Outer Sector: TS-1", "id": "outerSectorTS1"},
  {"title": "Outer Sector: TS-2", "id": "outerSectorTS2"},
  {"title": "Outer Sector: TS-76", "id": "outerSectorTS76"},
  {"title": "Outer Sector: WS-1", "id": "outerSectorWS1"}
];

tiles = shuffle(tiles);

/* GET Game page. */
router.post('/', function(req, res) {
  const { username, player } = req.body
  res.render('game', {
      title: 'Lunar Rebellion',
      tiles: tiles,
      username,
      player
  });
});

var chatspace = io.of('/chatspace');
chatspace.on('connection', function(socket){
  // socket.broadcast.emit('hi');  // Send for everyone except those on a certain socket
  // if (user == undefined) {
  //   user = "anonymous user";
  // }
  // if (player != undefined) {
    chatspace.emit('chat message', '- ' + player + '(' + user + ') connected-');
    socket.on('chat message', function(msg){
      // console.log('message: ' + msg);
      chatspace.emit('chat message', player + '(' + user + ')</br>' + msg);
    });
    socket.on('disconnect', function(){
      chatspace.emit('chat message', '- ' + player + '(' + user + ') disconnected-');
    });
  //}
});

module.exports = router;
