function addPlayerAvatar(player) {
  var initialPosition;
  var playerAvatar = `
    <div id="playerAvatar" class="player-avatar ${player} ${player}-start"></div>
  `;
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
  return initialPosition;
}


