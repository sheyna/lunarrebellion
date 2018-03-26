var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var router = express.Router();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var tiles = require('../lib/tiles.js');
var shuffle = require('../lib/shuffle.js');
var chatspace = io.of('/chatspace');

tiles = shuffle(tiles);

/* GET Game page. */
router.post('/', (req, res) => {
  const { username, player } = req.body
  res.render('game', {
      title: 'Lunar Rebellion',
      tiles: tiles,
      username,
      player
  });
});

router.get('/', function(req, res, next) {
  chatspace.on('connection', function(socket){
    // socket.broadcast.emit('hi');  // Send for everyone except those on a certain socket
    // console.log("we are connected");
    // chatspace.emit('chat message', '-A user connected-');
    socket.on('chat message', function(msg) {
      console.log('message: ' + msg);
      chatspace.emit('chat message', msg);
    });
    // socket.on('disconnect', function() {
    //   chatspace.emit('chat message', '-A user disconnected-');
    // });
    //}
  });
});

module.exports = router;
