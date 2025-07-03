import fs from 'fs';
import assert from 'assert';
import { spawn } from 'child_process';
import http from 'http';

const script = fs.readFileSync('./frontend/script.js', 'utf8');
assert(script.includes('fetch('), 'fetch call missing in script.js');

const server = spawn('node', ['server.js']);
await new Promise((r) => setTimeout(r, 1000));

const status = await new Promise((resolve, reject) => {
  http
    .get('http://localhost:3000/../../etc/passwd', (res) => {
      resolve(res.statusCode);
    })
    .on('error', reject);
});

server.kill();
await new Promise((r) => server.on('exit', r));

assert(status === 400 || status === 404, 'unexpected status');
console.log('All tests passed');
