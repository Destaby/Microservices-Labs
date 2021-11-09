const http = require('http');

const URLS = [
  'http://service-1-service/api/service1',
  'http://service-2-service/api/service2',
];

const requestListener = async (req, res) => {
  const results = await Promise.allSettled(
    URLS.map(
      URL =>
        new Promise((resolve, reject) => {
          console.log(URL);
          http
            .request(URL, response => {
              let body = '';
              response.setEncoding('utf8');
              response.on('data', chunk => {
                body += chunk;
              });
              response.on('end', () => resolve(body));
            })
            .end();
        })
    )
  );

  const errors = [];
  const [message1, message2] = results.map(outcome =>
    outcome.status === 'rejected'
      ? errors.push(outcome.reason.message)
      : outcome.value
  );
  if (errors.length !== 0) {
    res.writeHead(500);
    return res.end(errors.join(', '));
  }
  res.writeHead(200);
  res.end(message1 + ' ' + message2);
};

const server = http.createServer(requestListener);
server.listen(8080);
