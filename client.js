const net = require('net')
const socket = new net.Socket()
socket.connect(8080, 'localhost')

socket.on('connect', function () {
  socket.write('connect server')
})

socket.on('data', function (data) {
  data = data.toString()
  if (data === '111') {
    socket.write('2222')

    setTimeout(() => {
      socket.end()
    }, 1000)
  }
})

socket.on('error', function (error) {
  console.log(error)
})
