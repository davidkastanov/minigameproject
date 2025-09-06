const dino = document.querySelector(".dino__dino");
const cactus = document.querySelector(".dino__cactus");

let gameStarted = false;
let isAlive;
let isJumping = false;

function jump() {
  if (isJumping) return; 
  isJumping = true;

  let bottom = 0;
  let upInterval = setInterval(() => {
    if (bottom >= 120) { 
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        if (bottom <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        }
        bottom -= 5; 
        dino.style.bottom = bottom + "px";
      }, 20);
    }
    bottom += 5; 
    dino.style.bottom = bottom + "px";
  }, 20);
}

function startGame() {
  if (gameStarted) return;
  gameStarted = true;

  cactus.style.left = "700px";

  isAlive = setInterval(function () {
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));

    if (cactusLeft <= -50) {
      cactus.style.left = "700px";
    } else {
      cactus.style.left = cactusLeft - 4 + "px"; 
    }

    if (cactusLeft < 100 && cactusLeft > 50 && dinoBottom <= 50) {
      alert("GAME OVER!");
      clearInterval(isAlive);
      gameStarted = false;
      cactus.style.left = "700px";
    }
  }, 20);
}

document.addEventListener("keydown", function (event) {
  if (!gameStarted) startGame();
  if (event.code === "Space") jump();
});