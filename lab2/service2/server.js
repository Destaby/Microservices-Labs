const http = require('http');

let STATUS = 'OK';
const TIMEOUT = 10000;

const listeners = {
  '/api/service2': (req, res) =>
    new Promise((resolve, reject) => {
      STATUS !== 'OK' ? setTimeout(() => resolve(), TIMEOUT) : resolve();
    }).then(() => {
      res.writeHead(200);
      res.end('Hello from service2');
    }),
  '/api/service2/untested-request': (req, res) => {
    STATUS = 'FAILED';
    res.writeHead(200);
    res.end('Service2 is going to broken state');
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
