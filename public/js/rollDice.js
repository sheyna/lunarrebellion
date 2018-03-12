function rollDice(category) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'js/dice.json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var inventory = JSON.parse(xhr.responseText);

      var statusHTML = '';
      for (var i = 0; i < inventory.length; i++) {
        if (category == 'all' || inventory[i].itemClass == category || (category == 'specials' && inventory[i].special)) {
          statusHTML += '<section class="inventory-listing"><img src="' + inventory[i].imageURL + '" alt="' + inventory[i].itemTitle + '"><h1>' + inventory[i].itemTitle + '</h1><p>$';
            // Checks if item is on special discount:
            // (seting .toFixed(2) will set final number to only numbers after decimal point)
            if (inventory[i].special) {
              var priceCalc = getDiscount(inventory[i].itemPrice, inventory[i].discount);
              // var priceCalc = getDiscount.getDiscount(inventory[i].itemPrice, inventory[i].discount);
              statusHTML += priceCalc + ' <span class="special">' + inventory[i].discount + '% OFF of $' + (inventory[i].itemPrice.toFixed(2)) + '</span> ';
            } else {
              statusHTML += (inventory[i].itemPrice.toFixed(2));
            }
          statusHTML += '</p></section>';
        }
      }
      document.getElementById('inventory').innerHTML = statusHTML;
    }
  };
  xhr.send();
}

document.getElementById('diceContent').addEventListener("click", rollDice);

document.getElementById('rollDiceBtn').addEventListener("click", rollDice);

