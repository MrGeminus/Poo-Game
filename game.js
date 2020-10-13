const canvas = document.getElementById("game");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var gameRunning = false;
let startMenu = document.getElementById('start-menu');
const playerImage = document.getElementById("player");
const pooImage = document.getElementById("poo");
const enemyImage = document.getElementById("enemy");
const heartImage = document.getElementById("heart");
var score = document.getElementById("points");
var hearts = [];
var points = 0;
var immortal = false;
const player = {
    playerWidth: 50,
    playerHeight: 50,
    playerXCoordinate: 50,
    playerYCoordinate: 50,
    playerSpeed: 10,
    xValocity: 0,
    yValocity: 0,
    maxLives: 3,
}
class Heart {
    constructor(hi, hx, hy, hw, hh) {
        this.heartImage = hi;
        this.heartWidth = hw;
        this.heartHeight = hh;
        this.heartXCoordinate = hx;
        this.heartYCoordinate = hy;
    }
    drawHeart() {
        ctx.drawImage(this.heartImage, this.heartXCoordinate, this.heartYCoordinate, this.heartWidth, this.heartHeight);
    }

}
var poos = [];
var pooMax = 5;
class Poo {
    constructor(pi, px, py, pw, ph, pvx, pvy) {
        this.pooImage = pi;
        this.pooWidth = pw;
        this.pooHeight = ph;
        this.pooXCoordinate = px;
        this.pooYCoordinate = py;
        this.pooXValocity = pvx;
        this.pooYValocity = pvy;
    }
    drawPoo() {
        ctx.drawImage(this.pooImage, this.pooXCoordinate, this.pooYCoordinate, this.pooWidth, this.pooHeight);
    }
    collision() {
        if (this.pooXCoordinate <= 0) {
            this.pooXValocity *= -1;
        }
        if (this.pooXCoordinate + this.pooWidth >= canvas.width) {
            this.pooXValocity *= -1;
        }
        if (this.pooYCoordinate <= 0) {
            this.pooYValocity *= -1;
        }
        if (this.pooYCoordinate + this.pooHeight >= canvas.height) {
            this.pooYValocity *= -1;
        }
    }
    updatePoo() {
        this.drawPoo();
        this.pooXCoordinate = this.pooXCoordinate + this.pooXValocity;
        this.pooYCoordinate = this.pooYCoordinate + this.pooYValocity;
        this.collision();
    }
}
var enemies = [];
var enemyMax = 5;
class Enemy {
    constructor(ei, ex, ey, ew, eh, evx, evy) {
        this.enemyImage = ei;
        this.enemyWidth = ew;
        this.enemyHeight = eh;
        this.enemyXCoordinate = ex;
        this.enemyYCoordinate = ey;
        this.enemyXValocity = evx;
        this.enemyYValocity = evy;
    }
    drawEnemy() {
        ctx.drawImage(this.enemyImage, this.enemyXCoordinate, this.enemyYCoordinate, this.enemyWidth, this.enemyHeight);
    }
    collision() {
        if (this.enemyXCoordinate <= 0) {
            this.enemyXValocity *= -1;
        }
        if (this.enemyXCoordinate + this.enemyWidth >= canvas.width) {
            this.enemyXValocity *= -1;
        }
        if (this.enemyYCoordinate <= 0) {
            this.enemyYValocity *= -1;
        }
        if (this.enemyYCoordinate + this.enemyHeight >= canvas.height) {
            this.enemyYValocity *= -1;
        }
    }
    updateEnemy() {
        this.drawEnemy();
        this.enemyXCoordinate = this.enemyXCoordinate + this.enemyXValocity;
        this.enemyYCoordinate = this.enemyYCoordinate + this.enemyYValocity;
        this.collision();
    }
}
function drawPlayer() {
    ctx.drawImage(playerImage, player.playerXCoordinate, player.playerYCoordinate, player.playerWidth, player.playerHeight)
}
function clearBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}
function movePlayer() {
    player.playerXCoordinate += player.xValocity;
    player.playerYCoordinate += player.yValocity;
    detectCollision();
}
function victroryScreen() {
    let victroryMenu = document.getElementById('victory-menu');
    victroryMenu.style.display = "flex";
    gameRunning = false;
}
function detectCollision() {
    if ((player.playerXCoordinate <= 0 && !immortal) ||
        (player.playerXCoordinate + player.playerWidth >= canvas.width && !immortal) ||
        (player.playerYCoordinate <= 0 && !immortal) ||
        (player.playerYCoordinate + player.playerHeight >= canvas.height && immortal)) {
        if (hearts.length === 1) {
            hearts.pop();
            endGame();
        }
        else {
            hearts.pop();
            player.playerXCoordinate = canvas.width;
            player.playerYCoordinate = canvas.height;
            immortal = true;
            setTimeout(() => { immortal = false; }, 1500)
        }
    }
}
function gameUpdate() {
    clearBoard();
    if (gameRunning) {
        drawPlayer();
    }
    hearts.forEach(heart => {
        heart.drawHeart();
    });
    poos.forEach((poo, index) => {
        poo.updatePoo();
        if (player.playerXCoordinate <= poo.pooXCoordinate + poo.pooWidth &&
            player.playerXCoordinate + player.playerWidth >= poo.pooXCoordinate &&
            player.playerYCoordinate <= poo.pooYCoordinate + poo.pooHeight &&
            player.playerYCoordinate + player.playerHeight >= poo.pooYCoordinate) {
            poos.splice(index, 1);
            points += 100;
            score.innerText = points;
            if (poos.length === 0) {
                victroryScreen();
            }
        }
    });
    enemies.forEach(enemy => {
        enemy.updateEnemy();
        if (player.playerXCoordinate <= enemy.enemyXCoordinate + enemy.enemyWidth &&
            player.playerXCoordinate + player.playerWidth >= enemy.enemyXCoordinate &&
            player.playerYCoordinate <= enemy.enemyYCoordinate + enemy.enemyHeight &&
            player.playerYCoordinate + player.playerHeight >= enemy.enemyYCoordinate &&
            !immortal) {
            if (hearts.length === 1) {
                hearts.pop()
                endGame();
            }
            else {
                hearts.pop()
                player.playerXCoordinate = canvas.width / 2
                player.playerYCoordinate = canvas.height / 2
                immortal = true;
                setTimeout(() => { immortal = false; }, 1000);
            }
        }
        poos.forEach(poo => {
            if (poo.pooXCoordinate <= enemy.enemyXCoordinate + enemy.enemyWidth &&
                poo.pooXCoordinate + poo.pooWidth >= enemy.enemyXCoordinate &&
                poo.pooYCoordinate <= enemy.enemyYCoordinate + enemy.enemyHeight &&
                poo.pooYCoordinate + poo.pooHeight >= enemy.enemyYCoordinate) {
                enemy.enemyYValocity *= -1;
                poo.pooYValocity *= -1;
                enemy.enemyXValocity *= -1;
                poo.pooXValocity *= -1;
            }
        });
    });
    movePlayer();
    if (gameRunning) {
        requestAnimationFrame(gameUpdate);
    }
}
function keyPressed(e) {
    if (e.key === 'ArrowRight' || e.key === 'Right') {
        player.xValocity = player.playerSpeed;
    }
    else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        player.xValocity = -player.playerSpeed;
    }
    else if (e.key === 'ArrowUp' || e.key === 'Up') {
        player.yValocity = -player.playerSpeed;
    }
    else if (e.key === 'ArrowDown' || e.key === 'Down') {
        player.yValocity = player.playerSpeed;
    }
}
function keyReleased(e) {
    if (e.key == 'ArrowRight' || e.key == 'ArrowLeft' || e.key == 'ArrowUp' || e.key == 'ArrowDown' || e.key == 'Right' || e.key == 'Left' || e.key == 'Up' || e.key == 'Down') {
        player.xValocity = 0;
        player.yValocity = 0;
    }
}
function startGame() {
    startMenu.style.display = "none";
    gameRunning = true;
    for (let i = 0; i < player.maxLives; i++) {
        hearts.push(new Heart(heartImage, 255 + [i] * 25, 15, 25, 25))[i];
    }
    player.playerXCoordinate = (Math.random() * (canvas.width - 2 * player.playerWidth)) + player.playerWidth;
    player.playerYCoordinate = (Math.random() * (canvas.height - 2 * player.playerHeight)) + player.playerHeight;
    for (let i = 0; i < pooMax; i++) {
        poos.push(new Poo(pooImage, (Math.random() * (canvas.width - 100)) + 50, (Math.random() * (canvas.height - 100)) + 50, 50, 50, Math.random() * 3, Math.random() * 3))[i];
    }
    for (let i = 0; i < enemyMax; i++) {
        enemies.push(new Enemy(enemyImage, (Math.random() * (canvas.width - 100)) + 50, (Math.random() * (canvas.height - 100)) + 50, 50, 50, Math.random() * 3, Math.random() * 3))[i];
    }
    gameUpdate();
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);
}
function startButtonPressed() {
    startGame();
    start.removeEventListener("click", startButtonPressed);
};
var start = document.getElementById('start');
start.addEventListener("click", startButtonPressed);
function startKeyPressed(e) {
    if (e.key === 'Enter') {
        startGame();
        document.removeEventListener("keydown", startKeyPressed);
    }
};
document.addEventListener("keydown", startKeyPressed);
let gameRules = document.getElementById('gameRules').addEventListener("click", () => {
    rulesPage.style.display = "flex";
    let rulesPageBack = document.getElementById('rulesPageBack').addEventListener("click", () => {
        rulesPage.style.display = "none";
    });
});
function endGame() {
    clearBoard();
    document.removeEventListener("keydown", keyPressed);
    document.removeEventListener("keyup", keyReleased);
    gameRunning = false;
    enemies.length = 0;
    poos.length = 0;
    points = 0;
    score.innerText = points;
    player.xValocity = 0;
    player.yValocity = 0;
    let endMenu = document.getElementById('end-menu');
    endMenu.style.display = "flex";
    let restart = document.getElementById('restart');
    function restartGame() {
        endMenu.style.display = "none";
        startGame();
        restart.removeEventListener("click", restartGame);
    };
    restart.addEventListener("click", restartGame);
    function restartKeyPressed(e) {
        if (e.key === 'Enter') {
            endMenu.style.display = "none";
            startGame();
            document.removeEventListener("keydown", restartKeyPressed);
        }
    }
    document.addEventListener("keydown", restartKeyPressed);
}