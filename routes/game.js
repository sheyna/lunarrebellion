var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var router = express.Router();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var tiles = require('../lib/tiles.js');
var shuffle = require('../lib/shuffle.js');


// CHAT SERVER REQUIRES:

// var chatspace = io.of('/chatspace');
var chatspace = io.of('/');


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



// CHAT SERVER CODE:

// chat code is failing on the .emit(). Still working to get it
// to work on separate chat space but on the same page as /game:

router.get('/', function(req, res, next) {
  chatspace.on('connection', function(socket){
    socket.on('chat message', function(msg) {
      console.log('message: ' + msg);
      chatspace.emit('chat message', msg);
    });
  });
});



module.exports = router;
