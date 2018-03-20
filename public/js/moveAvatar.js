function moveAvatar(domElement, startingPosition, crownPosition) {
  startingPosition = parseInt(startingPosition);
  queryClick = domElement.dataset.boxposition;
  queryClick = parseInt(queryClick);

  if (startingPosition < 24 && queryClick === startingPosition + 6) {
      // you can move one down
      startingPosition = makeMove(queryClick);

  } else if (startingPosition > 5 && queryClick === startingPosition - 6) {
      // you can move one up
      startingPosition = makeMove(queryClick)

  } else if (startingPosition !== 0 && startingPosition % 6 !== 0 && queryClick === startingPosition - 1) {
     // you can move to left
     startingPosition = makeMove(queryClick);

  } else if ((startingPosition + 1) % 6 !== 0 && queryClick === startingPosition + 1) {
     // you can move to right
     startingPosition = makeMove(queryClick);
  }

  // check if game is won:
  if (startingPosition === crownPosition) {
    alert("You won!");
  }

  return startingPosition
}

function makeMove(queryClick) {
  // move avatar:
  $("#playerAvatar").prependTo(".boardTile[data-boxposition='" + queryClick + "']");

  // update current position variable:
  startingPosition = queryClick;
  return startingPosition
}
