var currentPlayer = 'X'

function pickSquare () {
  this.innerHTML = currentPlayer
  if (this.innerHTML !== '') {
    return
  }
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}
