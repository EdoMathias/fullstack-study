import http from 'http';

const server = http.createServer((req, res) => {
  //   res.end('Hello from node server');
  const users = [
    {
      id: 1,
      firstName: 'Edo',
      lastName: 'Mathias',
      email: 'e@gmail.com',
    },
    {
      id: 2,
      firstName: 'bb',
      lastName: 'bb',
      email: 'e@gmail.com',
    },
    {
      id: 3,
      firstName: 'cc',
      lastName: 'cc',
      email: 'e@gmail.com',
    },
  ];
  console.log(req.url);

  if (req.url === '/users') {
    res.writeHead(200, { 'Conte-type': 'appliction/json' });
    res.end(JSON.stringify(users));
  } else if (req.url === '/users/1') {
    res.writeHead(200, { 'Conte-type': 'appliction/json' });
    res.end(JSON.stringify(users[0]));
  } else {
    res.writeHead(404, { 'Conte-type': 'appliction/json' });
    res.end(JSON.stringify({ msg: 'Not Found' }));
  }
});

server.listen(3200, () => {
  console.log('Listening on port 3000');
});
