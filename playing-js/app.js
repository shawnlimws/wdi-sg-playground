function concatenate (greeting, name) {
  if (typeof greeting === 'undefined') {
    greeting = 'hello'
  } if (typeof name === 'undefined') {
    name = 'stranger'
  } return greeting + ' ' + name
}
console.log(concatenate('hello', 'shawn') === 'hello shawn')
concatenate() === 'hello stranger'
