import http from 'http';
import { createReadStream, existsSync } from 'fs';
import { extname, join, normalize } from 'path';

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
  const urlPath = req.url === '/' ? 'index.html' : req.url.replace(/^\/+/, '');
  const sanitizedPath = normalize(urlPath);
  if (sanitizedPath.startsWith('..')) {
    res.statusCode = 400;
    res.end('Bad Request');
    return;
  }
  const filePath = join(root, sanitizedPath);
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
