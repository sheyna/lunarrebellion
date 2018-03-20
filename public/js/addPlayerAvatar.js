function addPlayerAvatar(player) {
  var initialPosition;

  // create the avatar:
  var playerAvatar = `
    <div id="playerAvatar" class="player-avatar ${player} ${player}-start"></div>
  `;

  // place the avatar
  if (player === "Cress" || player === "Cinder") {
    var royalPortOfArtemisia = document.getElementById("royalPortOfArtemisia")
    royalPortOfArtemisia.insertAdjacentHTML('afterbegin', playerAvatar);
    initialPosition = royalPortOfArtemisia.dataset.boxposition;
  } else if (player === "Scarlet") {
    var menagerie = document.getElementById("menagerie");
    menagerie.insertAdjacentHTML('afterbegin', playerAvatar);
    initialPosition = menagerie.dataset.boxposition;
  } else if (player === "Winter") {
    var wintersRoom = document.getElementById("wintersRoom");
    wintersRoom.insertAdjacentHTML('afterbegin', playerAvatar);
    initialPosition = wintersRoom.dataset.boxposition;
  }
  initialPosition = parseInt(initialPosition);

  // return avatar position:
  return initialPosition;
}

function addLunarCrown(currentPosition, tileCells) {
  // create crown:
  var lunarCrownIcon = `
    <div id="lunarCrownIcon" class="game-token">
      <img src="images/crown.svg" />
    </div>
  `;

  // find random cell, not where the avatar is to put the crown:
  var randomCell;
  while (randomCell === currentPosition || randomCell === undefined) {
   randomCell = Math.floor(Math.random() * tileCells.length);
  }
  var crownCell = document.querySelector("[data-boxposition='" + randomCell + "']");
  crownCell.insertAdjacentHTML('afterbegin', lunarCrownIcon);

  // return the cell number location of the crown:
  return randomCell;
}


