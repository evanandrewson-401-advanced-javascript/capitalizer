const io = require('socket.io')(7890);

io.on('connection', socket => {
  socket.on('file-read', () => {});
  socket.on('file-write', () => {});
  socket.on('file-saved', () => {});
  socket.on('file-error', () => {});
});