const net = require('net');
var socket = net.createConnection(8000, 'localhost');
// socket.write('hello');
process.stdin.pipe(socket);
socket.on('data', function(data){
  console.log(data.toString());
});