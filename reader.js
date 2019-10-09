const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const readFile = require('./read-file');


readFile(process.argv[2]).then(file => {
  socket.emit('file-read', process.argv[2], file);
})
  .catch(err => {
    socket.emit('file-error', err);
  });

