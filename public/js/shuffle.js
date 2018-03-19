// Shuffle Source: https://css-tricks.com/snippets/javascript/shuffle-array/

var exports = module.exports = {};

function shuffle(arr) {
  for(let j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
  return arr;
};
