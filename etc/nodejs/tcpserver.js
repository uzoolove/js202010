const net = require('net');
net.createServer(function(socket){
  console.log(socket.remoteAddress, '접속.');
  socket.addListener('data', function(data){
    console.log(data.toString());
  });
}).listen(8000, function(){
  console.log('TCP 서버 구동 완료.');
});