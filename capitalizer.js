const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');

socket.on('file-read', (path, data) => {
  const capitalized = data.toUpperCase();
  socket.emit('file-write', path, capitalized);
});