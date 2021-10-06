const net = require('net')

let count = 0
const server = net.createServer(function (socket) {
  socket.on('data', function (data) {
    data = data.toString()
    count++
    if (count === 1) {
      socket.write('111')
    }
  })

  socket.on('end', function () {
    console.log('客户端关闭')
  })
})

server.on('error', function (err) {
  console.log(err)
})

server.listen(8080)
