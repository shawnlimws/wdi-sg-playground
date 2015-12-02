var app = require('../main.js')
var request = require('supertest')
var expect = require('chai').expect

describe('particpants', () => {
  it('should respond with JSON data', done => {
    request(app).get('/participants')
      .expect('Content-Type', /json/)
      // .expect('Content-Length', '20')
      .expect(200)
      // .end(function (err, res) {
      //   if (err) throw err
      .end(done)
  })

  it('should respond with not empty', done => {
    request(app).get('/participants')
    .expect(res => res.body.name > 0)
    .end(done)
  })

  it('should respond with names', done => {
    request(app).get('/participants')
    .expect(res => res.body.every(person => person.name))
    .end(done)
  })
})

describe('participants/:name', () => {
  it('should respond with searched name', done => {
    request(app).get('/participants/albert')
    .expect(res => res.body[0].name.toLowerCase().split(' ') === 'albert')
    .end(done)
  })
})
