(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var currentPlayer = 'O';

/* Defining all my HTML elements here so standard
   doesn't complain about missing globals.
 */
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var button5 = document.getElementById('button5');
var button6 = document.getElementById('button6');
var button7 = document.getElementById('button7');
var button8 = document.getElementById('button8');
var button9 = document.getElementById('button9');

var playButton = document.getElementById('playButton');

function pickSquare() {
  if (this.innerHTML !== '') {
    return;
  }
  this.innerHTML = currentPlayer;
  if (currentPlayer === 'O') {
    currentPlayer = 'X';
    document.querySelector('.selectTurn').innerHTML = 'X Turn';
  } else {
    currentPlayer = 'O';
    document.querySelector('.selectTurn').innerHTML = 'O Turn';
  }
  checkWinner();
}

function checkCombination(x, y, z) {
  if (x.innerHTML !== '' && x.innerHTML === y.innerHTML && x.innerHTML === z.innerHTML) {
    x.style.background = 'firebrick';
    y.style.background = 'firebrick';
    z.style.background = 'firebrick';
    document.querySelector('.selectTurn').innerHTML = 'Winner is ' + x.innerHTML + '!';

    /* We get a NodeList from getElementsByClassName and not an Array instance.
       We use Array.from() to convert the NodeList into a more useful Array.
       Then we use the forEach iterator to loop through each of the elements.
     */
    Array.from(document.getElementsByClassName('tile')).forEach(function (tile) {
      return tile.disabled = true;
    });

    /* More verbosely:
        var tileNodelist = document.getElementsByClassName('tile')
       var tileArray = Array.from(tileNodelist)
       function disableTile (tileElement) {
         tileElement.disable = true
       }
       tileArray.forEach(disableTile)
     */

    endGame();
  }
}

function checkWinner() {
  // check rows
  checkCombination(button1, button2, button3);
  checkCombination(button4, button5, button6);
  checkCombination(button7, button8, button9);
  // check columns
  checkCombination(button1, button4, button7);
  checkCombination(button2, button5, button8);
  checkCombination(button3, button6, button9);
  // check diagonals
  checkCombination(button1, button5, button9);
  checkCombination(button3, button5, button7);
}

button1.onclick = pickSquare;
button2.onclick = pickSquare;
button3.onclick = pickSquare;
button4.onclick = pickSquare;
button5.onclick = pickSquare;
button6.onclick = pickSquare;
button7.onclick = pickSquare;
button8.onclick = pickSquare;
button9.onclick = pickSquare;
playButton.onclick = resetGame;

function resetGame() {
  button1.innerHTML = '';
  button2.innerHTML = '';
  button3.innerHTML = '';
  button4.innerHTML = '';
  button5.innerHTML = '';
  button6.innerHTML = '';
  button7.innerHTML = '';
  button8.innerHTML = '';
  button9.innerHTML = '';
  button1.style.background = '';
  button2.style.background = '';
  button3.style.background = '';
  button4.style.background = '';
  button5.style.background = '';
  button6.style.background = '';
  button7.style.background = '';
  button8.style.background = '';
  button9.style.background = '';
  currentPlayer = 'O';
  document.querySelector('.selectTurn').innerHTML = 'O Turn';
  button1.disabled = false;
  button2.disabled = false;
  button3.disabled = false;
  button4.disabled = false;
  button5.disabled = false;
  button6.disabled = false;
  button7.disabled = false;
  button8.disabled = false;
  button9.disabled = false;
}

function endGame() {
  button1.disabled = true;
  button2.disabled = true;
  button3.disabled = true;
  button4.disabled = true;
  button5.disabled = true;
  button6.disabled = true;
  button7.disabled = true;
  button8.disabled = true;
  button9.disabled = true;
}

},{}]},{},[1]);
