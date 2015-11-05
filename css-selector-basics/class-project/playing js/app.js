function concatenate (greeting, name) {
  if (typeof greeting === 'undefined') {
    greeting = 'hello'
  } if (typeof greeting === 'undefined') {
    name = 'stranger'
  } return greeting + ' ' + name
}

concatenate ('hello', 'shawn') === "hello shawn"
concatenate () === "hello stranger"
