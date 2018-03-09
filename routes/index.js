var express = require('express');
var app = express();
var router = express.Router();

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/views/index.html');
// });

// routes
app.get('/', function (req, res) {
  res.render('index', {
    locals: {
      title: 'Welcome'
    }
  });
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
        locals: {
      title: 'Lunar Rebellion: Pick a Player'
    }
  });
  // res.sendFile(__dirname + '/views/index.html');
  // res.send('Remember it\'s only a game');
});

module.exports = router;
