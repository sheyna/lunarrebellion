var diceResult = document.getElementById('diceResult');

function rollDice() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'js/dice.json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var diceSides = JSON.parse(xhr.responseText);
      console.log(diceSides.length);
      var rand = Math.floor(Math.random() * diceSides.length);
      console.log(rand);
      let statusHTML = `
        <img src="${diceSides[rand].src}" alt="{$diceSides[rand].title}" title="{$diceSides[rand].title}" class="dice-img" />
      `;
      diceResult.innerHTML = statusHTML;
    }
  };
  xhr.send();
}

diceResult.addEventListener("click", rollDice);

document.getElementById('rollDiceBtn').addEventListener("click", rollDice);

