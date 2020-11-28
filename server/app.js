
const app = require('express')()
const server = require('http').createServer(app)
const io = new require('socket.io')(server)

const m = (name, text, id) => ({name, text, id})

io.on('connection', socket => {

  socket.on('userJoined', (data, cb)=>{
    if (!data.name || !data.room) {
      return cb('incorrect data')
    }

    socket.join(data.room)
    cb({userId: socket.id})
    socket.emit('newMessage', m('admin', `Welcome ${data.name}`))
    socket.broadcast.to(data.room)
      .emit('newMessage', m('admin', `User ${data.name} joined the room ${data.room}`))

  })

});

module.exports = {
  app,
  server
}
