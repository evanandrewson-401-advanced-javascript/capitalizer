const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const writeFile = require('./write-file');

socket.on('file-write', (path, data) => {
  writeFile(path, data).then(() => {
    socket.emit('file-saved');
  });
});