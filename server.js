const http = require('http');
const fs = require('fs');
const path = require('path');

// Початковий стан квадратів
let greenBox = { text: 'Зелений', color: 'green' };
let redBox = { text: 'Червоний', color: 'red' };

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    // Віддаємо HTML-файл
    fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    });
  } else if (req.url === '/styles.css' && req.method === 'GET') {
    // Віддаємо CSS-файл
    fs.readFile(path.join(__dirname, 'styles.css'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(content);
    });
  } else if (req.url === '/script.js' && req.method === 'GET') {
    // Віддаємо JS-файл
    fs.readFile(path.join(__dirname, 'script.js'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'application/javascript' });
      res.end(content);
    });
  } else if (req.url === '/swap-colors' && req.method === 'GET') {
    // Міняємо кольори квадратів
    const temp = greenBox;
    greenBox = redBox;
    redBox = temp;

    // Відправляємо новий стан клієнту
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ green: greenBox, red: redBox }));
  } else {
    // 404 Not Found для інших запитів
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
