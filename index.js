var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var io = require('socket.io')(http);

var routes = require('./routes/index');
var game = require('./routes/game');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var currentPlayers = [];

function Player(name, username) {
  this.name = name;
  this.username = username;
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/game', game);

// view engine setup
app.set('views', path.join(__dirname, 'views'));

http.listen(3000, function(){
  console.log('listening on *:3000');
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

//Other routes here
app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});




