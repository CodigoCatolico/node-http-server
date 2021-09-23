const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
  const headers = req.headers;
  const parsedURL = url.parse(req.url, true);
  const query = parsedURL.query;
  const path = parsedURL.path.split('/')[1];

  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    res.setHeader('content-type', 'application/json');
    res.writeHead(200);
    res.end(
      JSON.stringify({
        headers: headers,
        path: path,
        query: query,
        body: JSON.parse(data),
      })
    );
  });
});

const port = 8080;
console.log('server listening on port:', port);
server.listen(port);
