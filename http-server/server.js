var http = require('http')

const port = process.env.PORT || 8080

const server = http.createServer((request, response) => {
  // console.log(request, response)
  console.log(request.url)
  if (request.url === '/') {
    response.end('How are you!')
  } else if (request.url === '/hello') {
    response.end('Yikes')
  }
})

server.listen(port, () => {
  console.log('listening on port', server.address())
})
