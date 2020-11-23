import { startMenu, continueGame, creditsPageBack, pauseTitle, vitoryTitle, exitMainMenu, rulesTitle, ruleOne, ruleTwo, ruleThree, pooEatenSound, childrenSound, countdownSound, deadSound, gameOverSound, backgroundMusic, hearts } from "./game.js";
export { openSetting, mu, md, ml, mr, r, p, mm };
export { openControls, translateGame };
var moveUpControl = document.getElementById('moveUpControl');
var moveDownControl = document.getElementById('moveDownControl');
var moveLeftControl = document.getElementById('moveLeftControl');
var moveRightControl = document.getElementById('moveRightControl');
var startGameControl = document.getElementById('startGameControl');
var pauseGameControl = document.getElementById('pauseGameControl');
var mainMenuControl = document.getElementById('mainMenuControl');
var moveUpControlSpan = document.getElementById('moveUpControlSpan');
var moveDownControlSpan = document.getElementById('moveDownControlSpan');
var moveLeftControlSpan = document.getElementById('moveLeftControlSpan');
var moveRightControlSpan = document.getElementById('moveRightControlSpan');
var startGameControlSpan = document.getElementById('startGameControlSpan');
var pauseGameControlSpan = document.getElementById('pauseGameControlSpan');
var mainMenuControlSpan = document.getElementById('mainMenuControlSpan');
var musicVolumeController = document.getElementById("musicVolumeController");
var soundEffectVolumeController = document.getElementById("soundEffectVolumeController");
var srbLabel = document.querySelector('.srb');
var deLabel = document.querySelector('.de');
var enLabel = document.querySelector('.en');
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
var languageArray = {
    "english":
    {
        "start": "Start Game",
        "gameRules": "Game Rules",
        "setting": "Settings",
        "credits": "Credits",
        "logOut": "Log Out",
        "score": "Score:",
        "lives": "Lives:",
        "logIn": "Log In",
        "labelFormUserName": "User Name:",
        "invalidTxtUser": "The username that you've entered is incorrect",
        "labelFormUserPassword": "Password:",
        "invalidTxtPass": "The password that you've entered is incorrect",
        "interductionText": "The most shittiest game ever!",
        "continueGame": "Continue",
        "exitMainMenu": "Main Menu",
        "rulesTitle": "Rules:",
        "ruleOne": "1. Eat as much poop as you can",
        "ruleTwo": "2. Don't get caught while doing so",
        "ruleThree": "3. Don't fuck with Arnold Schwarzenegger",
        "rulesPageBack": "Back",
        "controls": "Controls Settings",
        "language": "Language Settings",
        "audio": "Audio Settings",
        "settingPageBack": "Back",
        "moveUpControl": "Move Up:",
        "moveDownControl": "Move Down:",
        "moveLeftControl": "Move Left:",
        "moveRightControl": "Move Right:",
        "startGameControl": "Start Game:",
        "pauseGameControl": "Pause Game:",
        "mainMenuControl": "Main Menu:",
        "creditsPageBack": "Back",
        "controlsPageConfirm": "Confirm Changes",
        "controlsPageBack": "Back",
        "serbian": "Serbian",
        "german": "German",
        "english": "English",
        "languagePageConfirm": "Confirm Changes",
        "languagePageBack": "Back",
        "audioPageBack": "Back",
        "restart": "Try again?",
        "pauseTitle": "Game Paused!",
        "vitoryTitle": "Congratulation, you are full of shit!",
        "nextLevel": "Replay"
    },
    "serbian":
    {
        "start": "Почни Игру",
        "gameRules": "Правила Игре",
        "setting": "Подешавања",
        "credits": "Заслуге",
        "logOut": "Одјавити се",
        "score": "Бодови:",
        "lives": "Животи:",
        "logIn": "Пријави се",
        "labelFormUserName": "Корисничко име:",
        "invalidTxtUser": "Унесено корисничко име је нетачно",
        "labelFormUserPassword": "Лозинка:",
        "invalidTxtPass": "Лозинка коју сте унели је нетачна",
        "interductionText": "Најусранија игра икад!",
        "continueGame": "Настави",
        "exitMainMenu": "Главни мени",
        "rulesTitle": "Правила:",
        "ruleOne": "1. Поједи што више каке",
        "ruleTwo": "2. Немој бити ухваћен док то радиш",
        "ruleThree": "3. Не зајебавај се са Арнолдом Шварцнегером",
        "rulesPageBack": "Назад",
        "controls": "Подешавања",
        "language": "Подешавања језика",
        "audio": "Подешавања звука",
        "settingPageBack": "Назад",
        "moveUpControl": "Кретање горе:",
        "moveDownControl": "Кретање доле:",
        "moveLeftControl": "Кретање лево:",
        "moveRightControl": "Кретање десно:",
        "startGameControl": "Започни игру:",
        "pauseGameControl": "Паузирај игру:",
        "mainMenuControl": "Главни мени:",
        "creditsPageBack": "Назад",
        "controlsPageConfirm": "Потврди промене",
        "controlsPageBack": "Назад",
        "serbian": "Српски",
        "german": "Немачки",
        "english": "Енглески",
        "languagePageConfirm": "Потврди промене",
        "languagePageBack": "Назад",
        "audioPageBack": "Назад",
        "restart": "Покушај поново?",
        "pauseTitle": "Игра је паузирана!",
        "vitoryTitle": "Честитамо, пун си гована!",
        "nextLevel": "Играј поново"
    },
    "german":
    {
        "start": "Spiel Starten",
        "gameRules": "Spielregeln",
        "setting": "Einstellungen",
        "credits": "Credits",
        "logOut": "Ausloggen",
        "score": "Punktestand:",
        "lives": "Leben:",
        "logIn": "Einloggen",
        "labelFormUserName": "Benutzername:",
        "invalidTxtUser": "Der eingegebene Benutzername ist falsch",
        "labelFormUserPassword": "Passwort:",
        "invalidTxtPass": "Das eingegebene Passwort ist falsch",
        "interductionText": "Das beschissenste Spiel aller Zeiten!",
        "continueGame": "Fortsetzen",
        "exitMainMenu": "Hauptmenü",
        "rulesTitle": "Regeln:",
        "ruleOne": "1. Iss so viel Kacke wie du nur kannst",
        "ruleTwo": "2. Lass dich dabei nicht erwischen",
        "ruleThree": "3. Leg dich nicht mit Arnold Schwarzenegger",
        "rulesPageBack": "Zurück",
        "controls": "Steuerungseinstellungen",
        "language": "Spracheinstellungen",
        "audio": "Audio Einstellungen",
        "settingPageBack": "Zurück",
        "moveUpControl": "Move Up:",
        "moveDownControl": "Move Down:",
        "moveLeftControl": "Move Left:",
        "moveRightControl": "Nach rechts bewegen:",
        "startGameControl": "Spiel starten:",
        "pauseGameControl": "Spiel anhalten:",
        "mainMenuControl": "Hauptmenü:",
        "creditsPageBack": "Zurück",
        "controlsPageConfirm": "Änderungen bestätigen",
        "controlsPageBack": "Zurück",
        "serbian": "Serbisch",
        "german": "Deutsch",
        "english": "Englisch",
        "languagePageConfirm": "Änderungen bestätigen",
        "languagePageBack": "Zurück",
        "audioPageBack": "Zurück",
        "restart": "Versuch es noch einmal?",
        "pauseTitle": "Spiel pausiert!",
        "vitoryTitle": "Glückwunsch, du bist voller Scheiße!",
        "nextLevel": "Replay"
    }
}
var controlsPage = document.getElementById('controlsPage');
var controlsPageConfirm = document.getElementById('controlsPageConfirm');
var alreadyListeningUp = false;
var alreadyListeningDown = false;
var alreadyListeningLeft = false;
var alreadyListeningRight = false;
var alreadyListeningStart = false;
var alreadyListeningPause = false;
var alreadyListeningMenu = false;
function translateGame() {
    if (!(localStorage.getItem("lang") === undefined)) {
        let prefLang = localStorage.getItem("lang");
        start.textContent = languageArray[prefLang].start;
        continueGame.textContent = languageArray[prefLang].continueGame;
        exitMainMenu.textContent = languageArray[prefLang].exitMainMenu;
        moveUpControlSpan.textContent = languageArray[prefLang].moveUpControl;
        moveDownControlSpan.textContent = languageArray[prefLang].moveDownControl;
        moveLeftControlSpan.textContent = languageArray[prefLang].moveLeftControl;
        moveRightControlSpan.textContent = languageArray[prefLang].moveRightControl;
        startGameControlSpan.textContent = languageArray[prefLang].startGameControl;
        pauseGameControlSpan.textContent = languageArray[prefLang].pauseGameControl;
        mainMenuControlSpan.textContent = languageArray[prefLang].mainMenuControl;
        gameRules.textContent = languageArray[prefLang].gameRules;
        setting.textContent = languageArray[prefLang].setting;
        logOut.textContent = languageArray[prefLang].logOut;
        rulesTitle.textContent = languageArray[prefLang].rulesTitle;
        ruleOne.textContent = languageArray[prefLang].ruleOne;
        ruleTwo.textContent = languageArray[prefLang].ruleTwo;
        ruleThree.textContent = languageArray[prefLang].ruleThree;
        rulesPageBack.textContent = languageArray[prefLang].rulesPageBack;
        credits.textContent = languageArray[prefLang].credits;
        creditsPageBack.textContent = languageArray[prefLang].creditsPageBack;
        controls.textContent = languageArray[prefLang].controls;
        language.textContent = languageArray[prefLang].language;
        audio.textContent = languageArray[prefLang].audio;
        settingPageBack.textContent = languageArray[prefLang].settingPageBack;
        restart.textContent = languageArray[prefLang].restart;
        nextLevel.textContent = languageArray[prefLang].nextLevel;
        controlsPageConfirm.textContent = languageArray[prefLang].controlsPageConfirm;
        controlsPageBack.textContent = languageArray[prefLang].controlsPageBack;
        srbLabel.textContent = languageArray[prefLang].serbian;
        deLabel.textContent = languageArray[prefLang].german;
        enLabel.textContent = languageArray[prefLang].english;
        languagePageConfirm.textContent = languageArray[prefLang].languagePageConfirm;
        languagePageBack.textContent = languageArray[prefLang].languagePageBack;
        audioPageBack.textContent = languageArray[prefLang].audioPageBack;
        pauseTitle.textContent = languageArray[prefLang].pauseTitle;
        vitoryTitle.textContent = languageArray[prefLang].vitoryTitle;
        score.textContent = languageArray[prefLang].score;
        lives.textContent = languageArray[prefLang].lives;
        logIn.textContent = languageArray[prefLang].logIn;
        labelFormUserName.textContent = languageArray[prefLang].labelFormUserName;
        invalidTxtUser.textContent = languageArray[prefLang].invalidTxtUser;
        labelFormUserPassword.textContent = languageArray[prefLang].labelFormUserPassword;
        invalidTxtPass.textContent = languageArray[prefLang].invalidTxtPass;
        interductionText.textContent = languageArray[prefLang].interductionText;
    }
    else {
        let defaultLang = "english"
        start.textContent = languageArray[defaultLang].start;
        continueGame.textContent = languageArray[defaultLang].continueGame;
        exitMainMenu.textContent = languageArray[defaultLang].exitMainMenu;
        moveUpControlSpan.textContent = languageArray[defaultLang].moveUpControl;
        moveDownControlSpan.textContent = languageArray[defaultLang].moveDownControl;
        moveLeftControlSpan.textContent = languageArray[defaultLang].moveLeftControl;
        moveRightControlSpan.textContent = languageArray[defaultLang].moveRightControl;
        startGameControlSpan.textContent = languageArray[defaultLang].startGameControl;
        pauseGameControlSpan.textContent = languageArray[defaultLang].pauseGameControl;
        mainMenuControlSpan.textContent = languageArray[defaultLang].mainMenuControl;
        gameRules.textContent = languageArray[defaultLang].gameRules;
        setting.textContent = languageArray[defaultLang].setting;
        logOut.textContent = languageArray[defaultLang].logOut;
        rulesTitle.textContent = languageArray[defaultLang].rulesTitle;
        ruleOne.textContent = languageArray[defaultLang].ruleOne;
        ruleTwo.textContent = languageArray[defaultLang].ruleTwo;
        ruleThree.textContent = languageArray[defaultLang].ruleThree;
        rulesPageBack.textContent = languageArray[defaultLang].rulesPageBack;
        credits.textContent = languageArray[defaultLang].credits;
        creditsPageBack.textContent = languageArray[defaultLang].creditsPageBack;
        controls.textContent = languageArray[defaultLang].controls;
        language.textContent = languageArray[defaultLang].language;
        audio.textContent = languageArray[defaultLang].audio;
        settingPageBack.textContent = languageArray[defaultLang].settingPageBack;
        restart.textContent = languageArray[defaultLang].restart;
        nextLevel.textContent = languageArray[defaultLang].nextLevel;
        controlsPageConfirm.textContent = languageArray[defaultLang].controlsPageConfirm;
        controlsPageBack.textContent = languageArray[defaultLang].controlsPageBack;
        srbLabel.textContent = languageArray[defaultLang].serbian;
        deLabel.textContent = languageArray[defaultLang].german;
        enLabel.textContent = languageArray[defaultLang].english;
        languagePageConfirm.textContent = languageArray[defaultLang].languagePageConfirm;
        languagePageBack.textContent = languageArray[defaultLang].languagePageBack;
        audioPageBack.textContent = languageArray[defaultLang].audioPageBack;
        pauseTitle.textContent = languageArray[defaultLang].pauseTitle;
        vitoryTitle.textContent = languageArray[defaultLang].vitoryTitle;
        score.textContent = languageArray[defaultLang].score;
        lives.textContent = languageArray[defaultLang].lives;
        logIn.textContent = languageArray[defaultLang].logIn;
        labelFormUserName.textContent = languageArray[defaultLang].labelFormUserName;
        invalidTxtUser.textContent = languageArray[defaultLang].invalidTxtUser;
        labelFormUserPassword.textContent = languageArray[defaultLang].labelFormUserPassword;
        invalidTxtPass.textContent = languageArray[defaultLang].invalidTxtPass;
        interductionText.textContent = languageArray[defaultLang].interductionText;
    }
}
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
        controlsPageConfirm.style.opacity = "0";
    }
    function showConfirmBtn() {
        controlsPageConfirm.style.visibility = "visible";
        controlsPageConfirm.style.opacity = "1";
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
    openSetting();
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
function openLanguage() {
    language.removeEventListener("click", openLanguage);
    settingPage.style.display = "none";
    var languagePage = document.getElementById("languagePage");
    languagePage.style.display = "flex";
    var storedLang = localStorage.getItem("lang");
    var btnAleadyShown;
    var prevVariable;
    if (storedLang === undefined) {
        english.previousElementSibling.style.color = "#442fffad";
        prevVariable = english;
    }
    else if (storedLang === "serbian") {
        serbian.previousElementSibling.style.color = "#442fffad";
        prevVariable = storedLang;
    }
    else if (storedLang === "german") {
        german.previousElementSibling.style.color = "#442fffad";
        prevVariable = storedLang;
    }
    else if (storedLang === "english") {
        english.previousElementSibling.style.color = "#442fffad";
        prevVariable = storedLang;
    }
    function leaveLanguagePage() {
        languagePageConfirm.style.opacity = "0"
        languagePageConfirm.style.visibility = "hidden";
        localStorage.setItem("lang", `${prevVariable}`);
        languagePageBack.removeEventListener("click", leaveLanguagePage)
        languagePage.style.display = "none";
        location.reload();
        openSetting();
    };
    var languagePageBack = document.getElementById('languagePageBack')
    languagePageBack.addEventListener("click", leaveLanguagePage)
    function confirmChange() {
        prevVariable = localStorage.getItem("lang");
        languagePageConfirm.style.opacity = "0"
        languagePageConfirm.style.visibility = "hidden";
        translateGame();
        changeLanguage();
    }
    function checkIfSerbianIsPreferred() {
        if (storedLang === undefined) {
            english.previousElementSibling.style.color = "#000000";
            serbian.previousElementSibling.style.color = "#442fffad";
            localStorage.setItem("lang", "serbian")
            if (!btnAleadyShown) {
                showLanguageConfirmBtn();
                btnAleadyShown = true;
            }
        }
        else {
            english.previousElementSibling.style.color = "#000000";
            german.previousElementSibling.style.color = "#000000";
            serbian.previousElementSibling.style.color = "#442fffad";
            localStorage.removeItem("lang");
            localStorage.setItem("lang", "serbian")
            if (!btnAleadyShown) {
                showLanguageConfirmBtn();
                btnAleadyShown = true;
            }
        }
    }
    function checkIfGermanIsPreferred() {
        if (storedLang === undefined) {
            english.previousElementSibling.style.color = "#000000";
            german.previousElementSibling.style.color = "#442fffad";
            localStorage.setItem("lang", "german")
            if (!btnAleadyShown) {
                showLanguageConfirmBtn();
                btnAleadyShown = true;
            }
        }
        else {
            serbian.previousElementSibling.style.color = "#000000";
            english.previousElementSibling.style.color = "#000000";
            german.previousElementSibling.style.color = "#442fffad";
            localStorage.removeItem("lang");
            localStorage.setItem("lang", "german")
            if (!btnAleadyShown) {
                showLanguageConfirmBtn();
                btnAleadyShown = true;
            }
        }
    }
    function checkIfEnglischIsPreferred() {
        if (storedLang === undefined) {
            localStorage.setItem("lang", "english")
            if (!btnAleadyShown) {
                showLanguageConfirmBtn();
                btnAleadyShown = true;
            }
        }
        else {
            serbian.previousElementSibling.style.color = "#000000";
            german.previousElementSibling.style.color = "#000000";
            english.previousElementSibling.style.color = "#442fffad";
            localStorage.removeItem("lang");
            localStorage.setItem("lang", "english")
            if (!btnAleadyShown) {
                showLanguageConfirmBtn();
                btnAleadyShown = true;
            }
        }
    }
    function showLanguageConfirmBtn() {
        languagePageConfirm.style.visibility = "visible";
        setTimeout(() => {
            languagePageConfirm.style.opacity = "1"
            languagePageConfirm.addEventListener("click", confirmChange);
        }, 300);
    }
    function changeLanguage() {
        btnAleadyShown = false;
        let serbian = document.getElementById('serbian');
        let german = document.getElementById('german');
        let english = document.getElementById('english');
        serbian.addEventListener('click', checkIfSerbianIsPreferred);
        german.addEventListener('click', checkIfGermanIsPreferred);
        english.addEventListener('click', checkIfEnglischIsPreferred);
    }
    changeLanguage();

}
function openAudio() {
    audio.removeEventListener("click", openAudio);
    settingPage.style.display = "none";
    audioPage.style.display = "flex";
    function changeMusicVolume() {
        backgroundMusic.volume = musicVolumeController.value / 100;
        backgroundMusic.play();
        localStorage.setItem("MusVol", `${backgroundMusic.volume}`)
    }
    function changeSoundEffectVolume() {
        countdownSound.volume = soundEffectVolumeController.value / 100;
        countdownSound.play();
        localStorage.setItem("SoundVol", `${countdownSound.volume}`)
    }
    musicVolumeController.addEventListener("change", changeMusicVolume);
    soundEffectVolumeController.addEventListener("change", changeSoundEffectVolume);
    var audioPageBack = document.getElementById('audioPageBack');
    function leaveAudioPage() {
        musicVolumeController.removeEventListener("change", changeMusicVolume);
        soundEffectVolumeController.removeEventListener("change", changeSoundEffectVolume);
        audioPageBack.removeEventListener("click", leaveAudioPage)
        backgroundMusic.pause();
        countdownSound.pause();
        audioPage.style.display = "none";
        settingPage.style.display = "flex";
    };
    audioPageBack.addEventListener("click", leaveAudioPage);
};
function leaveSettingPage() {
    localStorage.setItem("settingPageOpen", "false");
    settingPageBack.removeEventListener("click", leaveSettingPage)
    settingPage.style.display = "none";
    startMenu.style.display = "flex";
    location.reload();
};
function openSetting() {
    translateGame();
    localStorage.setItem("settingPageOpen", "true");
    setting.removeEventListener("click", openSetting);
    startMenu.style.display = "none";
    var settingPage = document.getElementById('settingPage');
    settingPage.style.display = "flex";
    var controls = document.getElementById('controls');
    controls.addEventListener("click", openControls);
    var language = document.getElementById('language');
    language.addEventListener("click", openLanguage);
    var audio = document.getElementById('audio');
    audio.addEventListener("click", openAudio);
    var settingPageBack = document.getElementById('settingPageBack')
    settingPageBack.addEventListener("click", leaveSettingPage);
};