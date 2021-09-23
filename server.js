const http = require('http');

const server = http.createServer(function (req, res) {
  res.end('hello world!');
});

const port = 8080;
console.log('server runing on port:', port);
server.listen(port);
