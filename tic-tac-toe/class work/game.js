var currentPlayer = 'one'
var body = document.querySelector('body')
body.addEventListener('click', event => {
  console.log(event)
  var tile = event.target
  if (tile.className !== 'tile') return
  if (tile.textContent) return
  if (currentPlayer === 'one') {
    tile.textContent = 'X'
    currentPlayer = 'two'
  } else {
    tile.textContent = 'O'
    currentPlayer = 'one'
  }
})
var tiles = document.querySelectorAll('.tile')
function findWinner () {
  if (tiles[0].textContent === tiles[1].textContent && tiles[0].textContent == tiles[2].textContent) {
    alert ('Winner is' + tiles[0].textContent)
  }
}
