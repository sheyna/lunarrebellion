var express = require('express');
var app = express();
var router = express.Router();

// app.get('/', function(req, res){
//   // res.sendFile(__dirname + '/views/game.html');
//   res.render('game', { title: 'game' });
// });

/* GET Game page. */
router.get('/', function(req, res) {
  res.render('game', {
        locals: {
      title: 'Lunar Rebellion'
    }
  });
  // res.send('The game is afoot');
  // res.sendFile(__dirname + '/views/game.html');
});

module.exports = router;
