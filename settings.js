import { startMenu } from "./game.js";
export { openSetting, mu, md, ml, mr, r, p, mm };
export { openControls };
var moveUpControl = document.getElementById('moveUpControl');
var moveDownControl = document.getElementById('moveDownControl');
var moveLeftControl = document.getElementById('moveLeftControl');
var moveRightControl = document.getElementById('moveRightControl');
var startGameControl = document.getElementById('startGameControl');
var pauseGameControl = document.getElementById('pauseGameControl');
var mainMenuControl = document.getElementById('mainMenuControl');
var moveUp = document.getElementById('moveUp');
var mu;
var moveDown = document.getElementById('moveDown');
var md;
var moveLeft = document.getElementById('moveLeft');
var ml;
var moveRight = document.getElementById('moveRight');
var mr;
var run = document.getElementById('run');
var r;
var pause = document.getElementById('pause');
var p;
var mainMenu = document.getElementById('mainMenu');
var mm;
function initializeMoveUp() {
    if (localStorage.getItem("MoveUp") == undefined) {
        mu = 'ArrowUp';
        moveUp.innerText = 'ArrowUp';
    }
    else {
        mu = `${localStorage.getItem("MoveUp")}`;
        moveUp.innerText = `${localStorage.getItem("MoveUp")}`;
    }
}
function initializeMoveDown() {
    if (localStorage.getItem("MoveDown") == undefined) {
        md = 'ArrowDown';
        moveDown.innerText = 'ArrowDown';
    }
    else {
        md = `${localStorage.getItem("MoveDown")}`;
        moveDown.innerText = `${localStorage.getItem("MoveDown")}`;
    }
}
function initializeMoveLeft() {
    if (localStorage.getItem("MoveLeft") == undefined) {
        ml = 'ArrowLeft';
        moveLeft.innerText = 'ArrowLeft';
    }
    else {
        ml = `${localStorage.getItem("MoveLeft")}`;
        moveLeft.innerText = `${localStorage.getItem("MoveLeft")}`;
    }
}
function initializeMoveRight() {
    if (localStorage.getItem("MoveRight") == undefined) {
        mr = 'ArrowRight';
        moveRight.innerText = 'ArrowRight';
    }
    else {
        mr = `${localStorage.getItem("MoveRight")}`;
        moveRight.innerText = `${localStorage.getItem("MoveRight")}`;
    }
}
function initializeStart() {
    if (localStorage.getItem("StartGame") == undefined) {
        r = 'Enter';
        run.innerText = 'Enter';
    }
    else {
        r = `${localStorage.getItem("StartGame")}`;
        run.innerText = `${localStorage.getItem("StartGame")}`;
    }
}
function initializePause() {
    if (localStorage.getItem("PauseGame") == undefined) {
        p = 'Pause';
        pause.innerText = 'Pause';
    }
    else {
        p = `${localStorage.getItem("PauseGame")}`;
        pause.innerText = `${localStorage.getItem("PauseGame")}`;
    }
}
function initializeMenu() {
    if (localStorage.getItem("MainMenu") == undefined) {
        mm = 'Escape';
        mainMenu.innerText = 'Escape';
    }
    else {
        mm = `${localStorage.getItem("MainMenu")}`;
        mainMenu.innerText = `${localStorage.getItem("MainMenu")}`;
    }
}
initializeMoveUp();
initializeMoveDown();
initializeMoveLeft();
initializeMoveRight();
initializeStart();
initializePause();
initializeMenu();
var controlsPage = document.getElementById('controlsPage');
var controlsPageConfirm = document.getElementById('controlsPageConfirm');
var alreadyListeningUp = false;
var alreadyListeningDown = false;
var alreadyListeningLeft = false;
var alreadyListeningRight = false;
var alreadyListeningStart = false;
var alreadyListeningPause = false;
var alreadyListeningMenu = false;
function changeControls() {
    function confirmChange() {
        moveUpControl.classList.remove("active");
        moveDownControl.classList.remove("active");
        moveLeftControl.classList.remove("active");
        moveRightControl.classList.remove("active");
        startGameControl.classList.remove("active");
        pauseGameControl.classList.remove("active");
        mainMenuControl.classList.remove("active");
        document.removeEventListener("keydown", applyInputUp);
        document.removeEventListener("keydown", applyInputDown);
        document.removeEventListener("keydown", applyInputLeft);
        document.removeEventListener("keydown", applyInputRight);
        document.removeEventListener("keydown", applyInputStart);
        document.removeEventListener("keydown", applyInputPause);
        document.removeEventListener("keydown", applyInputMenu);
        controlsPageConfirm.style.visibility = "hidden";
    }
    function showConfirmBtn() {
        controlsPageConfirm.style.visibility = "visible";
        controlsPageConfirm.addEventListener("click", confirmChange);
    }
    function applyInputUp(e) {
        localStorage.setItem("MoveUp", `${e.key}`)
        moveUp.innerText = e.key;
        showConfirmBtn();
    }
    function applyInputDown(e) {
        localStorage.setItem("MoveDown", `${e.key}`)
        moveDown.innerText = e.key;
        showConfirmBtn();
    }
    function applyInputLeft(e) {
        localStorage.setItem("MoveLeft", `${e.key}`)
        moveLeft.innerText = e.key;
        showConfirmBtn();
    }
    function applyInputRight(e) {
        localStorage.setItem("MoveRight", `${e.key}`)
        moveRight.innerText = e.key;
        showConfirmBtn();
    }
    function applyInputStart(e) {
        localStorage.setItem("StartGame", `${e.key}`)
        run.innerText = e.key;
        showConfirmBtn();
    }
    function applyInputPause(e) {
        localStorage.setItem("PauseGame", `${e.key}`)
        pause.innerText = e.key;
        showConfirmBtn();
    }
    function applyInputMenu(e) {
        localStorage.setItem("MainMenu", `${e.key}`)
        mainMenu.innerText = e.key;
        showConfirmBtn();
    }
    function listenForInputUp() {
        if (!alreadyListeningUp) {
            alreadyListeningUp = true;
            moveUpControl.classList.add("active");
            document.addEventListener("keydown", applyInputUp);
            alreadyListeningDown = false;
            moveDownControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputDown);
            alreadyListeningLeft = false;
            moveLeftControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputLeft);
            alreadyListeningRight = false;
            moveRightControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputRight);
            alreadyListeningStart = false;
            startGameControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputStart);
            alreadyListeningPause = false;
            pauseGameControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputPause);
            alreadyListeningMenu = false;
            mainMenuControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputMenu);
        }
        else {
            alreadyListeningUp = false;
            moveUpControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputUp);
        }
    }
    function listenForInputDown() {
        if (!alreadyListeningDown) {
            alreadyListeningUp = false;
            moveUpControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputUp);
            alreadyListeningDown = true;
            moveDownControl.classList.add("active");
            document.addEventListener("keydown", applyInputDown);
            alreadyListeningLeft = false;
            moveLeftControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputLeft);
            alreadyListeningRight = false;
            moveRightControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputRight);
            alreadyListeningStart = false;
            startGameControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputStart);
            alreadyListeningPause = false;
            pauseGameControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputPause);
            alreadyListeningMenu = false;
            mainMenuControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputMenu);
        }
        else {
            alreadyListeningDown = false;
            moveDownControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputDown);
        }
    }
    function listenForInputLeft() {
        if (!alreadyListeningLeft) {
            alreadyListeningUp = false;
            moveUpControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputUp);
            alreadyListeningDown = false;
            moveDownControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputDown);
            alreadyListeningLeft = true;
            moveLeftControl.classList.add("active");
            document.addEventListener("keydown", applyInputLeft);
            alreadyListeningRight = false;
            moveRightControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputRight);
            alreadyListeningStart = false;
            startGameControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputStart);
            alreadyListeningPause = false;
            pauseGameControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputPause);
            alreadyListeningMenu = false;
            mainMenuControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputMenu);
        }
        else {
            alreadyListeningLeft = false;
            moveLeftControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputLeft);
        }
    }
    function listenForInputRight() {
        if (!alreadyListeningRight) {
            alreadyListeningUp = false;
            moveUpControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputUp);
            alreadyListeningDown = false;
            moveDownControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputDown);
            alreadyListeningLeft = false;
            moveLeftControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputLeft);
            alreadyListeningRight = true;
            moveRightControl.classList.add("active");
            document.addEventListener("keydown", applyInputRight);
            alreadyListeningStart = false;
            startGameControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputStart);
            alreadyListeningPause = false;
            pauseGameControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputPause);
            alreadyListeningMenu = false;
            mainMenuControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputMenu);
        }
        else {
            alreadyListeningRight = false;
            moveRightControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputRight);
        }
    }
    function listenForInputStart() {
        if (!alreadyListeningStart) {
            alreadyListeningUp = false;
            moveUpControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputUp);
            alreadyListeningDown = false;
            moveDownControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputDown);
            alreadyListeningLeft = false;
            moveLeftControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputLeft);
            alreadyListeningRight = false;
            moveRightControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputRight);
            alreadyListeningStart = true;
            startGameControl.classList.add("active");
            document.addEventListener("keydown", applyInputStart);
            alreadyListeningPause = false;
            pauseGameControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputPause);
            alreadyListeningMenu = false;
            mainMenuControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputMenu);
        }
        else {
            alreadyListeningStart = false;
            startGameControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputStart);
        }
    }
    function listenForInputPause() {
        if (!alreadyListeningPause) {
            alreadyListeningUp = false;
            moveUpControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputUp);
            alreadyListeningDown = false;
            moveDownControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputDown);
            alreadyListeningLeft = false;
            moveLeftControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputLeft);
            alreadyListeningRight = false;
            moveRightControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputRight);
            alreadyListeningStart = false;
            startGameControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputStart);
            alreadyListeningPause = true;
            pauseGameControl.classList.add("active");
            document.addEventListener("keydown", applyInputPause);
            alreadyListeningMenu = false;
            mainMenuControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputMenu);
        }
        else {
            alreadyListeningPause = false;
            pauseGameControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputPause);
        }
    }
    function listenForInputMenu() {
        if (!alreadyListeningMenu) {
            alreadyListeningUp = false;
            moveUpControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputUp);
            alreadyListeningDown = false;
            moveDownControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputDown);
            alreadyListeningLeft = false;
            moveLeftControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputLeft);
            alreadyListeningRight = false;
            moveRightControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputRight);
            alreadyListeningStart = false;
            startGameControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputStart);
            alreadyListeningPause = false;
            pauseGameControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputPause);
            alreadyListeningMenu = true;
            mainMenuControl.classList.add("active");
            document.addEventListener("keydown", applyInputMenu);
        }
        else {
            alreadyListeningMenu = false;
            mainMenuControl.classList.remove("active");
            document.removeEventListener("keydown", applyInputMenu);
        }
    }
    moveUpControl.addEventListener("click", listenForInputUp);
    moveDownControl.addEventListener("click", listenForInputDown);
    moveLeftControl.addEventListener("click", listenForInputLeft);
    moveRightControl.addEventListener("click", listenForInputRight);
    startGameControl.addEventListener("click", listenForInputStart);
    pauseGameControl.addEventListener("click", listenForInputPause);
    mainMenuControl.addEventListener("click", listenForInputMenu);
}
function leaveControlsPage() {
    controlsPageBack.removeEventListener("click", leaveControlsPage)
    localStorage.removeItem("controlsPageActive");
    controlsPage.style.display = "none";
    settingPage.style.display = "flex";
};
function openControls() {
    controls.removeEventListener("click", openControls);
    settingPage.style.display = "none";
    controlsPage.style.display = "flex";
    localStorage.setItem("controlsPageActive", "true");
    var controlsPageBack = document.getElementById('controlsPageBack')
    changeControls();
    controlsPageBack.addEventListener("click", leaveControlsPage)
};
function leaveSettingPage() {
    settingPageBack.removeEventListener("click", leaveSettingPage)
    settingPage.style.display = "none";
    startMenu.style.display = "flex";
    location.reload();
};
function openSetting() {
    setting.removeEventListener("click", openSetting);
    startMenu.style.display = "none";
    var settingPage = document.getElementById('settingPage');
    settingPage.style.display = "flex";
    var controls = document.getElementById('controls');
    controls.addEventListener("click", openControls);
    var settingPageBack = document.getElementById('settingPageBack')
    settingPageBack.addEventListener("click", leaveSettingPage);
};