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


