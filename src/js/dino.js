const dino = document.querySelector(".dino__dino");
const cactus = document.querySelector(".dino__cactus");

let gameStarted = false;
let isAlive;
let isJumping = false;

function jump() {
  if (isJumping) return;
  isJumping = true;

  let bottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom")) || 0;
  let upSpeed = 5;
  let downSpeed = 5;

  let upInterval = setInterval(() => {
    if (bottom >= 120) {
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (bottom <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        }
        bottom -= downSpeed;
        dino.style.bottom = bottom + "px";
      }, 20);

    } else {
      bottom += upSpeed;
      dino.style.bottom = bottom + "px";
    }
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
      cactus.style.left = cactusLeft - 6 + "px";
    }

    if (cactusLeft < 100 && cactusLeft > 50 && dinoBottom <= 50) {
      alert("GAME OVER!");
      clearInterval(isAlive);
      gameStarted = false;
      cactus.style.left = "700px";
    }
  }, 20);
}

dino.addEventListener("mousedown", (event) => {
  if (event.button === 0) {
    if (!gameStarted) startGame();
    jump();
  }
});
