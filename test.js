import fs from 'fs';
import assert from 'assert';

const script = fs.readFileSync('./frontend/script.js', 'utf8');
assert(script.includes('fetch('), 'fetch call missing in script.js');
console.log('All tests passed');
