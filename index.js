var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var exphbs  = require('express-handlebars');


var routes = require('./routes/index');
var game = require('./routes/game');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'public'))); // -- older version
app.use('/', routes);
app.use('/game', game);


// view engine setup
app.set('views', path.join(__dirname, 'views'));


// Register '.mustache' extension with The Mustache Express


// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/views/index.html');
// });

// app.get('/game', function(req, res){
//   res.sendFile(__dirname + '/views/game.html');
//   // res.render('game', { title: 'game' });
// });

http.listen(3000, function(){
  console.log('listening on *:3000');
});

// var chatspace = io.of('/chatspace');
// chatspace.on('connection', function(socket){
//   // socket.broadcast.emit('hi');  // Send for everyone except those on a certain socket
//   if (user == undefined) {
//     user = "anonymous user";
//   }
//   if (player != undefined) {
//     chatspace.emit('chat message', '- ' + player + '(' + user + ') connected-');
//     socket.on('chat message', function(msg){
//       // console.log('message: ' + msg);
//       chatspace.emit('chat message', player + '(' + user + ')</br>' + msg);
//     });
//     socket.on('disconnect', function(){
//       chatspace.emit('chat message', '- ' + player + '(' + user + ') disconnected-');
//     });
//   }
// });

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




