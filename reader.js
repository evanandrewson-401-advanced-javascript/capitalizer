const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const readFile = require('./read-file');


socket.emit('file-read', readFile(process.argv[2]));