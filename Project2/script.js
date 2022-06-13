const randomBox = document.querySelector('.randomBox');
const player1Random = document.querySelector('.player1Random');
const player2Random = document.querySelector('.player2Random');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const playBtn = document.querySelector('.playBtn');
let player1 = true;
let player2 = false;
let continueGame = false;

function autoPlay() {
  const randomNumber = Math.floor(Math.random() * 6 + 1);
  randomBox.innerHTML = randomNumber;
}
function winGame() {
  if (player1Random.textContent === randomBox.textContent) {
    p1.innerHTML = 'Win';
    p2.innerHTML = 'Loss';
    continueGame = false;
    playBtn.innerHTML = 'Replay';
  } else if (player2Random.textContent === randomBox.textContent) {
    p1.innerHTML = 'Loss';
    p2.innerHTML = 'Win';
    continueGame = false;
    playBtn.innerHTML = 'Replay';
  }
}

const playerClick = playBtn.addEventListener('click', function () {
  if (player1 === true && continueGame == true) {
    player1Random.innerHTML = Math.floor(Math.random() * 6 + 1);
    playBtn.innerHTML = 'Player 2';
    winGame();
    player1 = false;
    player2 = true;
  } else if (continueGame == true) {
    player2Random.innerHTML = Math.floor(Math.random() * 6 + 1);
    playBtn.innerHTML = 'Player 1';
    winGame();
    player1 = true;
    player2 = false;
  } else {
    autoPlay();
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    continueGame = true;
    player1 = true;
    playBtn.innerHTML = 'Player 1';
    p1.innerHTML = 'Player 1';
    p2.innerHTML = 'Player 2';
    player1Random.innerHTML = 0;
    player2Random.innerHTML = 0;
  }
});
// autoPlay();
