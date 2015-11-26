const express = require('express')
const app = express()
const rs = require('fs')


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/hello', function (req, res) {
  res.send('Hi there!')

})
app.use(express.static('public'))

app.get('/game', (req, res) => {
  const filename = req.url.substr(1)
  fs.readFile('game.html', (err, data) => {
    if (err) return
    res.send(data.toString())
  })
})

const server = app.listen(3000, function () {
  const host = server.address().address
  const port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
