var express = require('express')
const app = express()
var Promise = require('bluebird')
var readFile = Promise.promisify(require('fs').readFile)
var includes = require('lodash.includes')
var sortBy = require('lodash.sortby')
var pick = require('lodash.pick')

app.use(express.static('public'))

app.get('/participants', function (req, res) {
  readFile('./public/data.json', 'utf8')
      .then(data => {
        return data
      }).then(data => {
        const obj = JSON.parse(data)
        res.send(obj.students)
      })
})

var server = app.listen(3000, function () {
  const host = server.address().address
  const port = server.address().port

  console.log('app listening at http://%s:%s', host, port)
})

app.get('/participants/:name', function (req, res) {
  readFile('./public/data.json', 'utf8')
      .then(data => {
        return data
      }).then(data => {
        const obj = JSON.parse(data)
        var students = obj.students
        // var studentNames = students.map(student => student.name.toLowerCase().split(' '))
        // var response = studentNames.filter(studentName => {
        //   return includes(studentName, req.params.name)
        // })
        var people = students.filter(student => {
          return includes(student.name.toLowerCase().split(' '), req.params.name)
        })
        var response = people.map(person => {
          return req.query.fields ? pick(person, req.query.fields) : person
        })
        var sortedResponse = sortBy(response, student => {
          return student.name
        })
        res.send(sortedResponse)
      })
})

app.get('/search', function (req, res) {
  console.log(req.query.fields)
  readFile('./public/data.json', 'utf8')
      .then(data => {
        return data
      }).then(data => {
        const obj = JSON.parse(data)
        var students = obj.students
        var response = students.map(student => {
          return pick(student, req.query.fields)
        })
        res.send(response)
      })
})
