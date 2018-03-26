// Shuffle Source: https://css-tricks.com/snippets/javascript/shuffle-array/

function shuffle(arr) {
  for(let j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
  return arr;
};

module.exports = shuffle;
