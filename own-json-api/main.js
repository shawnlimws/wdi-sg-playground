var express = require('express')
const app = express()
var Promise = require('bluebird')
var readFile = Promise.promisify(require('fs').readFile)
var includes = require('lodash.includes')
var sortBy = require('lodash.sortby')
var pick = require('lodash.pick')

var server = app.listen(0, function () {
  const host = server.address().address
  const port = server.address().port
  console.log('app listening at http://%s:%s', host, port)
})

module.exports = app

app.use(express.static('public'))

// Get JSON DATA
app.get('/participants', function (req, res) {
  readFile('./public/data.json', 'utf8')
      .then(data => {
        return data
      }).then(data => {
        const obj = JSON.parse(data)
        res.send(obj.students)
      })
})

// GET CLASSLIST OF PARTICIPANTS & PROVIDE SORT
app.get('/participants/:name', function (req, res) {
  readFile('./public/data.json', 'utf8')
      .then(data => {
        return data
      }).then(data => {
        const obj = JSON.parse(data)
        var students = obj.students
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

// PROVIDE SEARCH FUNCTION
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
