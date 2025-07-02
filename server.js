import http from 'http';
import { createReadStream, existsSync } from 'fs';
import { extname, join } from 'path';

const port = process.env.PORT || 3000;
const root = new URL('./frontend/', import.meta.url).pathname;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif'
};

const server = http.createServer((req, res) => {
  const filePath = join(root, req.url === '/' ? 'index.html' : req.url);
  if (!existsSync(filePath)) {
    res.statusCode = 404;
    res.end('Not found');
    return;
  }
  const ext = extname(filePath);
  res.setHeader('Content-Type', mimeTypes[ext] || 'text/plain');
  createReadStream(filePath).pipe(res);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
