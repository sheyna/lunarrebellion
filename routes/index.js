var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
      title: 'Lunar Rebellion: Pick a Player',
  });
});

router.post('/join', function(req, res) {
  res.send('You sent the name "' + req.body.username + '".');
});

module.exports = router;
