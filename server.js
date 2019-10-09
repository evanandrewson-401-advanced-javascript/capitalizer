const io = require('socket.io')(7890);

io.on('connection', socket => {
  socket.on('file-read', (path, data) => {
    socket.broadcast.emit('file-read', path, data);
  });
  socket.on('file-write', (path, data) => {
    socket.broadcast.emit('file-write', path, data);
  });
  socket.on('file-saved', () => {
    console.log('file saved')
  });
  socket.on('file-error', () => {});
});