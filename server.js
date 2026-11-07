const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 8000;
const BASE_DIR = path.resolve(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg'
};

const server = http.createServer((req, res) => {
  const rawPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const relPath = rawPath === '/' ? 'index.html' : rawPath.replace(/^\/+/, '');
  const filePath = path.resolve(BASE_DIR, relPath);

  // Prevent directory traversal outside workspace root
  if (!filePath.startsWith(BASE_DIR + path.sep) && filePath !== path.join(BASE_DIR, 'index.html')) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Server Error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`🏰 Kingdom Chess is running at ${url}`);
  console.log('Press Ctrl+C to stop.');
  exec(`start ${url}`);
});
