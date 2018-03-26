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
