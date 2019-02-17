var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var sql = require('./mysql');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    console.log('message: ' + msg);
  });
});

http.listen(8080, function() {
  console.log('listening on *:8080');
});