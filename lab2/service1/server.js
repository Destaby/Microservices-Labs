const http = require('http');

const listeners = {
  '/api/service1': (req, res) => {
    res.writeHead(200);
    res.end('Hello from service1');
  },
};

const requestListener = function (req, res) {
  const listener = listeners[req.url];
  if (listener) return listener(req, res);
  res.writeHead(404);
  res.end();
};

const server = http.createServer(requestListener);
server.listen(8080);
