const net = require('net');
net.createServer(function(socket){
  console.log(socket.remoteAddress, '접속.');
  socket.addListener('data', function(data){
    console.log(data.toString());
    // socket.write('서버로부터...' + data);
    socket.write('HTTP/1.1 200 OK\n');
    socket.write('Content-Type: text/html;charset=utf-8\n');
    socket.write('\n');
    socket.end('<h1>안녕 HTTP 서버</h1>');
  });
}).listen(8000, function(){
  console.log('TCP 서버 구동 완료.');
});