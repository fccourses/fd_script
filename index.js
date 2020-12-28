'use strict';

const PROTOCOL = 'http://';
const SERVER_IP = '127.0.0.1';
const PORT = 3000;

function createQuery(path) {
  const url = `${PROTOCOL}${SERVER_IP}:${PORT}${path}`
  return url;
}
