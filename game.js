import { users } from "./user.js";
import { openSetting, mu, md, ml, mr, r, p, mm } from "./settings.js";
export { showStartMenu, startMenu };
var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');
var gameRunning = false;
var gamePaused = false;
var gameOver = false;
var victory = false;
var keysArray = [];
var startMenu = document.getElementById('start-menu');
var pauseMenu = document.getElementById('pause-menu');
var start = document.getElementById('start');
var gameRules = document.getElementById('gameRules');
var setting = document.getElementById('setting');
var logOut = document.getElementById('logOut');
var rulesPage = document.getElementById('rulesPage');
var rulesPageBack = document.getElementById('rulesPageBack');
var credits = document.getElementById('credits');
var creditsPage = document.getElementById('creditsPage');
var creditsPageBack = document.getElementById('creditsPageBack');
var endMenu = document.getElementById('end-menu');
var restart = document.getElementById('restart');
var victroryMenu = document.getElementById('victory-menu');
var nextLevel = document.getElementById('nextLevel');
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
    xValocity: 5,
    yValocity: 5,
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
        if (this.pooXCoordinate <= 23) {
            this.pooXValocity *= -1;
        }
        if (this.pooXCoordinate + this.pooWidth >= canvas.width - 23) {
            this.pooXValocity *= -1;
        }
        if (this.pooYCoordinate <= 58) {
            this.pooYValocity *= -1;
        }
        if (this.pooYCoordinate + this.pooHeight >= canvas.height - 18) {
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
        if (this.enemyXCoordinate <= 23) {
            this.enemyXValocity *= -1;
        }
        if (this.enemyXCoordinate + this.enemyWidth >= canvas.width - 23) {
            this.enemyXValocity *= -1;
        }
        if (this.enemyYCoordinate <= 58) {
            this.enemyYValocity *= -1;
        }
        if (this.enemyYCoordinate + this.enemyHeight >= canvas.height - 18) {
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
    ctx.drawImage(playerImage, player.playerXCoordinate, player.playerYCoordinate, player.playerWidth, player.playerHeight);
}
function drawCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
function drawCanvasBorder() {
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = "black";
    ctx.rect(20, 55, canvas.width - 40, canvas.height - 75);
    ctx.stroke();
}
function clearBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}
function detectCollision() {
    if ((player.playerXCoordinate <= 20 && !immortal) ||
        (player.playerXCoordinate + player.playerWidth >= canvas.width - 23 && !immortal) ||
        (player.playerYCoordinate <= 55 && !immortal) ||
        (player.playerYCoordinate + player.playerHeight >= canvas.height - 18 && !immortal)) {
        if (hearts.length === 1) {
            hearts.pop();
            endGame();
        }
        else {
            hearts.pop();
            player.playerXCoordinate = canvas.width / 2;
            player.playerYCoordinate = canvas.height / 2;
            immortal = true;
            setTimeout(() => { immortal = false; }, 1500)
        }
    }
}
function pauseGame(e) {
    if (gamePaused === false && e.key === p) {
        gamePaused = true;
        pauseMenu.style.display = "flex";
    }
    else if (gamePaused === true && e.key === p) {
        gamePaused = false;
        pauseMenu.style.display = "none";
        gameUpdate();
    }
    else if (gamePaused === false && e.key === mm) {
        gamePaused = true;
        startMenu.style.display = "flex";
    }
    else if (gamePaused === true && e.key === mm) {
        gamePaused = false;
        startMenu.style.display = "none";
        gameUpdate();
    }
}
function checkIfUserHasPausedTheGame() {
    document.addEventListener("keydown", pauseGame);
}
function keyPressed(e) {
    keysArray[e.key] = true;
}
function keyReleased(e) {
    keysArray[e.key] = false;
}
function movePlayer() {
    if (mu in keysArray && keysArray[mu]) {
        player.playerYCoordinate -= player.yValocity;
    }
    if (md in keysArray && keysArray[md]) {
        player.playerYCoordinate += player.yValocity;

    }
    if (ml in keysArray && keysArray[ml]) {
        player.playerXCoordinate -= player.xValocity;
    }
    if (mr in keysArray && keysArray[mr]) {
        player.playerXCoordinate += player.xValocity;

    }
}
function startGame() {
    startMenu.style.display = "none";
    gameRunning = true;
    gameOver = false;
    victory = false;
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
    document.addEventListener("keydown", keyPressed, true);
    document.addEventListener("keyup", keyReleased, true);
    gameUpdate();
}
function showStartMenu() {
    startMenu.style.display = "flex";
    function disableStartKeyAndStartGame() {
        if (!gameRunning && !gameOver && !victory) {
            start.removeEventListener("click", startButtonPressed);
            document.removeEventListener("keydown", startKeyPressed);
            startGame();
        }
    }
    function startButtonPressed() {
        disableStartKeyAndStartGame();
    };
    start.addEventListener("click", startButtonPressed);
    function startKeyPressed(e) {
        if (e.key === r && !gameRunning && !gameOver && !victory) {
            disableStartKeyAndStartGame();
        }
    };
    document.addEventListener("keydown", startKeyPressed);
    function rulesButtonPressed() {
        document.removeEventListener("keydown", startKeyPressed);
        startMenu.style.display = "none";
        rulesPage.style.display = "flex";
        function goBackToStartMenu() {
            rulesPage.style.display = "none";
            startMenu.style.display = "flex";
        };
        rulesPageBack.addEventListener("click", goBackToStartMenu)
    };
    gameRules.addEventListener("click", rulesButtonPressed);
    function disableStartKeyPressed() {
        document.removeEventListener("keydown", startKeyPressed);
        openSetting();
    }
    setting.addEventListener("click", disableStartKeyPressed);
    function openCredits() {
        document.removeEventListener("keydown", startKeyPressed);
        startMenu.style.display = "none";
        creditsPage.style.display = "flex";
        function creditsPageBackIsPressed() {
            creditsPage.style.display = "none";
            startMenu.style.display = "flex";
        };
        creditsPageBack.addEventListener("click", creditsPageBackIsPressed)
    }
    credits.addEventListener("click", openCredits);
    function logOutUser() {
        document.removeEventListener("keydown", startKeyPressed);
        localStorage.removeItem("storedID");
        localStorage.removeItem("storedLogInInfo");
        location.reload();
    }
    logOut.addEventListener("click", logOutUser);
}
function endGame() {
    clearBoard();
    document.removeEventListener("keydown", keyPressed);
    document.removeEventListener("keyup", keyReleased);
    gameRunning = false;
    gameOver = true;
    enemies.length = 0;
    poos.length = 0;
    points = 0;
    score.innerText = points;
    endMenu.style.display = "flex";
    function restartGame() {
        endMenu.style.display = "none";
        document.removeEventListener("keydown", restartKeyPressed);
        restart.removeEventListener("click", restartGame);
        startGame();
    };
    restart.addEventListener("click", restartGame);
    function restartKeyPressed(e) {
        if (e.key === r && !gameRunning && gameOver && !victory) {
            endMenu.style.display = "none";
            restart.removeEventListener("click", restartGame);
            document.removeEventListener("keydown", restartKeyPressed);
            startGame();
        }
    }
    document.addEventListener("keydown", restartKeyPressed);
}
function victroryScreen() {
    clearBoard();
    victory = true;
    gameRunning = false;
    document.removeEventListener("keydown", keyPressed);
    document.removeEventListener("keyup", keyReleased);
    enemies.length = 0;
    poos.length = 0;
    victroryMenu.style.display = "flex";
    users[Number(localStorage.getItem("storedID")) - 1].globalScore = points;
    localStorage.setItem("newGlobalScore", `${users[Number(localStorage.getItem("storedID")) - 1].globalScore}`);
    points = 0;
    score.innerText = points;
    function repeatLevel() {
        victroryMenu.style.display = "none";
        nextLevel.removeEventListener("click", repeatLevel)
        startGame();
    }
    nextLevel.addEventListener("click", repeatLevel)
}
function gameUpdate() {
    drawCanvas();
    clearBoard();
    movePlayer();
    drawPlayer();
    drawCanvasBorder();
    detectCollision();
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
    if (gameRunning && !gameOver && !victory) {
        checkIfUserHasPausedTheGame();
    }
    if (gameRunning && !gamePaused && !gameOver && !victory) {
        requestAnimationFrame(gameUpdate);
    }
}


