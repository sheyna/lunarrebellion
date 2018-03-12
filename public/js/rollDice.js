var diceResult = document.getElementById('diceResult');

function rollDice() {
  if (document.getElementById("diceImg")) {
    diceResult.removeChild(document.getElementById("diceImg"));
  } else if (document.getElementById("diceContent")) {
    diceResult.removeChild(document.getElementById("diceContent"));
  }
  setTimeout(function(){
    getNewDiceResult();
  }, 500);
}

function getNewDiceResult() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'js/dice.json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var diceSides = JSON.parse(xhr.responseText);
      var rand = Math.floor(Math.random() * diceSides.length);
      let statusHTML = `
        <img src="${diceSides[rand].src}" alt="${diceSides[rand].title}" title="${diceSides[rand].title}" class="dice-img" id="diceImg"/>
      `;
      diceResult.insertAdjacentHTML('beforeend', statusHTML);
    }
  };
  xhr.send();
}

diceResult.addEventListener("click", rollDice);

document.getElementById('rollDiceBtn').addEventListener("click", rollDice);

