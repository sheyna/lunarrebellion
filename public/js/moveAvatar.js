function moveAvatar(startingPosition, queryClick) {
  startingPosition = parseInt(startingPosition);
  queryClick = parseInt(queryClick);
  if (startingPostion < 24 && queryClick === startingPosition + 6) {
      // you can move one down
  } else if (startingPosition > 5 && queryClick === startingPosition - 6) {
      // you can move one up
  } else if ((startingPostion !== 0 || startingPostion % 6 === 0) && queryClick === startingPosition + 1) {
     // you can move to right
  } else if ((startingPostion !== 5 || startingPostion !== 11 || startingPostion !== 17 || startingPostion !== 23 || startingPostion !== 29) && queryClick === startingPosition - 1) {
     // you can move to left
  }
}
