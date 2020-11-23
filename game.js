import { users } from "./user.js";
import { openSetting, mu, md, ml, mr, r, p, mm } from "./settings.js";
export { showStartMenu, startMenu, continueGame, creditsPageBack, pauseTitle, vitoryTitle, exitMainMenu, rulesTitle, ruleOne, ruleTwo, ruleThree, pooEatenSound, childrenSound, countdownSound, deadSound, gameOverSound, backgroundMusic, hearts };
var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');
var gameRunning = false;
var gamePaused = false;
var gameOver = false;
var victory = false;
var countDownHasStarted = false;
var keysArray = [];
const countdownOne = document.getElementById("nrOne");
const countdownTwo = document.getElementById("nrTwo");
const countdownThree = document.getElementById("nrThree");
const countdownGo = document.getElementById("go");
var pooEatenSound = document.getElementById("pooEatenSound");
var childrenSound = document.getElementById("childrenSound");
var countdownSound = document.getElementById("countdown");
var deadSound = document.getElementById("dead");
var gameOverSound = document.getElementById("gameOver");
var backgroundMusic = document.getElementById("background");
var startMenu = document.getElementById('start-menu');
var continueGame = document.getElementById('continue');
var exitMainMenu = document.getElementById('exitMainMenu');
var pauseMenu = document.getElementById('pause-menu');
var start = document.getElementById('start');
var gameRules = document.getElementById('gameRules');
var setting = document.getElementById('setting');
var logOut = document.getElementById('logOut');
var rulesPage = document.getElementById('rulesPage');
var rulesTitle = document.getElementById('rulesTitle');
var ruleOne = document.getElementById('ruleOne');
var ruleTwo = document.getElementById('ruleTwo');
var ruleThree = document.getElementById('ruleThree');
var toolbar = document.getElementById('toolbar');
var rulesPageBack = document.getElementById('rulesPageBack');
var credits = document.getElementById('credits');
var creditsPage = document.getElementById('creditsPage');
var creditsPageBack = document.getElementById('creditsPageBack');
var endMenu = document.getElementById('end-menu');
var restart = document.getElementById('restart');
var victroryMenu = document.getElementById('victory-menu');
var nextLevel = document.getElementById('nextLevel');
var escapeMenu = document.getElementById('escape-menu');
var pauseTitle = document.getElementById('pauseTitle');
var vitoryTitle = document.getElementById('vitoryTitle');
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
            deadSound.pause();
            deadSound.currentTime = 0;
            deadSound.volume = Number(localStorage.getItem("SoundVol"));
            deadSound.play();
            hearts.pop();
            endGame();
        }
        else {
            deadSound.pause();
            deadSound.currentTime = 0;
            deadSound.volume = Number(localStorage.getItem("SoundVol"));
            deadSound.play();
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
        escapeMenu.style.display = "flex";
    }
    else if (gamePaused === true && e.key === mm) {
        gamePaused = false;
        escapeMenu.style.display = "none";
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
function handleMovement(e) {
    if (e.touches) {
        player.playerXCoordinate = e.touches[0].pageX - canvas.offsetLeft - player.playerWidth / 2;
        player.playerYCoordinate = e.touches[0].pageY - canvas.offsetTop - player.playerHeight / 2;
        e.preventDefault();
    }
}
function showCountdown() {
    countDownHasStarted = true;
    let milestoneOne = 25;
    let milestoneTwo = 50;
    let milestoneThree = 75;
    let milestoneFour = 100;
    let milestoneFive = 115;
    let currentT = 25;
    countdownOne.style.display = "block";
    countdownTwo.style.display = "block";
    countdownThree.style.display = "block";
    countdownGo.style.display = "block";
    var x = setInterval(function () {
        if (currentT == milestoneOne) {
            countdownSound.pause();
            countdownSound.currentTime = 0;
            countdownSound.volume = Number(localStorage.getItem("SoundVol"));
            countdownSound.play();
            countdownThree.style.opacity = "1";
            currentT += 25;
        }
        else if (currentT == milestoneTwo) {
            countdownThree.style.opacity = "0";
            countdownTwo.style.opacity = "1";
            currentT += 25;
        }
        else if (currentT == milestoneThree) {
            countdownTwo.style.opacity = "0";
            countdownOne.style.opacity = "1";
            currentT += 25;
        }
        else if (currentT == milestoneFour) {
            countdownOne.style.opacity = "0";
            countdownGo.style.opacity = "1";
            currentT += 25;
        }
        else if (currentT > milestoneFive) {
            clearInterval(x);
            countDownHasStarted = false;
            countdownGo.style.opacity = "0";
            countdownOne.style.display = "none";
            countdownTwo.style.display = "none";
            countdownThree.style.display = "none";
            countdownGo.style.display = "none";
            gameUpdate();
        }
    }, 800);
}
function startGame() {
    backgroundMusic.pause();
    gameOverSound.pause();
    childrenSound.pause();
    startMenu.style.display = "none";
    if (window.innerWidth < 450) {
        if (document.querySelector("body").requestFullscreen) {
            document.querySelector("body").requestFullscreen().then(res => console.log(res)).catch(err => console.log(err));
        }
        screen.orientation.lock('landscape');
    }
    gameRunning = true;
    gameOver = false;
    victory = false;
    toolbar.style.visibility = "visible";
    for (let i = 0; i < player.maxLives; i++) {
        if (localStorage.getItem("lang") === "german") {
            hearts.push(new Heart(heartImage, 320 + [i] * 25, 15, 25, 25))[i];
        }
        else if (localStorage.getItem("lang") === "serbian") {
            hearts.push(new Heart(heartImage, 290 + [i] * 25, 15, 25, 25))[i];
        }
        else if (localStorage.getItem("lang") === "english" || localStorage.getItem("lang") === undefined) {
            hearts.push(new Heart(heartImage, 255 + [i] * 25, 15, 25, 25))[i];
        }
    }
    player.playerXCoordinate = (Math.random() * (canvas.width - 2 * player.playerWidth)) + player.playerWidth;
    player.playerYCoordinate = (Math.random() * (canvas.height - 2 * player.playerHeight)) + player.playerHeight;
    for (let i = 0; i < pooMax; i++) {
        poos.push(new Poo(pooImage, (Math.random() * (canvas.width - 140)) + 70, (Math.random() * (canvas.height - 175)) + 105, 50, 50, 2, 2))[i];
    }
    for (let i = 0; i < enemyMax; i++) {
        enemies.push(new Enemy(enemyImage, (Math.random() * (canvas.width - 140)) + 70, (Math.random() * (canvas.height - 175)) + 105, 50, 50, 2, 2))[i];
    }
    document.addEventListener("keydown", keyPressed, true);
    document.addEventListener("keyup", keyReleased, true);
    canvas.addEventListener("touchstart", handleMovement);
    canvas.addEventListener("touchmove", handleMovement);
    showCountdown();
}
function showStartMenu() {
    screen.orientation.unlock();
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
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    backgroundMusic.volume = Number(localStorage.getItem("MusVol"));
    backgroundMusic.play();
}
function endGame() {
    deadSound.pause();
    gameOverSound.pause();
    gameOverSound.currentTime = 0;
    gameOverSound.volume = Number(localStorage.getItem("SoundVol"));
    gameOverSound.play();
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
    childrenSound.pause();
    childrenSound.currentTime = 0;
    childrenSound.volume = Number(localStorage.getItem("SoundVol"));
    childrenSound.play();
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
    clearBoard();
    drawCanvas();
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
            pooEatenSound.pause();
            pooEatenSound.currentTime = 0;
            pooEatenSound.volume = Number(localStorage.getItem("SoundVol"));
            pooEatenSound.play();
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
                deadSound.pause();
                deadSound.currentTime = 0;
                deadSound.play();
                hearts.pop()
                endGame();
            }
            else {
                deadSound.pause();
                deadSound.currentTime = 0;
                deadSound.play();
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
                let vCollision = { x: `${poo.pooXCoordinate - enemy.enemyXCoordinate}`, y: `${poo.pooYCoordinate - enemy.enemyYCoordinate}` };
                let distance = Math.sqrt((`${poo.pooXCoordinate - enemy.enemyXCoordinate}`) * (`${poo.pooXCoordinate - enemy.enemyXCoordinate}`) + (`${poo.pooYCoordinate - enemy.enemyYCoordinate}`) * (`${poo.pooYCoordinate - enemy.enemyYCoordinate}`));
                let vCollisionNorm = { x: vCollision.x / distance, y: vCollision.y / distance };
                let vRelativeVelocity = { x: `${enemy.enemyXValocity - poo.pooXValocity}`, y: `${enemy.enemyYValocity - poo.pooYValocity}` };
                let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;
                if (!(speed < 0)) {
                    enemy.enemyXValocity -= speed * vCollisionNorm.x;
                    enemy.enemyYValocity -= speed * vCollisionNorm.y;
                    poo.pooXValocity += speed * vCollisionNorm.x;
                    poo.pooYValocity += speed * vCollisionNorm.y;
                }
            }
        });
    });
    if (gameRunning && !gameOver && !victory) {
        checkIfUserHasPausedTheGame();
    }
    if (gameRunning && !gamePaused && !gameOver && !victory && !countDownHasStarted) {
        requestAnimationFrame(gameUpdate);
    }
}


