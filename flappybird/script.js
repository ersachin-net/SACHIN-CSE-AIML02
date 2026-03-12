const bird = document.getElementById('bird');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');

let birdTop = 250;
let gravity = 2;
let isGameOver = false;
let score = 0;

// 1. Make the Bird Fall
function startGame() {
    if (isGameOver) return;
    birdTop += gravity;
    bird.style.top = birdTop + 'px';

    // Check if bird hits the ground or ceiling
    if (birdTop > 570 || birdTop < 0) {
        gameOver();
    }
}
let gameTimerId = setInterval(startGame, 20);

// 2. Jumping Logic
function jump() {
    if (birdTop > 40) birdTop -= 50;
    bird.style.top = birdTop + 'px';
}
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') jump();
});

// 3. Create Obstacles (Pipes)
function generatePipe() {
    if (isGameOver) return;
    let pipeLeft = 400;
    let randomHeight = Math.random() * 200;
    let gap = 150;

    const topPipe = document.createElement('div');
    const bottomPipe = document.createElement('div');
    topPipe.classList.add('pipe');
    bottomPipe.classList.add('pipe');

    gameContainer.appendChild(topPipe);
    gameContainer.appendChild(bottomPipe);

    function movePipe() {
        pipeLeft -= 2;
        topPipe.style.left = pipeLeft + 'px';
        bottomPipe.style.left = pipeLeft + 'px';
        
        topPipe.style.height = randomHeight + 'px';
        topPipe.style.top = '0px';
        bottomPipe.style.height = (600 - randomHeight - gap) + 'px';
        bottomPipe.style.bottom = '0px';

        // Collision Detection
        if (pipeLeft > 0 && pipeLeft < 90 && 
           (birdTop < randomHeight || birdTop > randomHeight + gap - 30)) {
            gameOver();
        }

        if (pipeLeft === -50) {
            score++;
            scoreElement.innerHTML = score;
            gameContainer.removeChild(topPipe);
            gameContainer.removeChild(bottomPipe);
        }
    }
    let pipeTimerId = setInterval(movePipe, 20);
    setTimeout(generatePipe, 3000);
}
generatePipe();

function gameOver() {
    clearInterval(gameTimerId);
    isGameOver = true;
    alert("Game Over! Score: " + score);
    location.reload(); // Refresh to restart
}