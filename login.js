import { users } from "./user.js";
import { openSetting, translateGame } from "./settings.js";
import { backgroundMusic, showStartMenu } from "./game.js";
var InputedUserName = "";
var InputedUserPasword = "";
var invalidTxtUser = document.getElementById("invalidTxtUser");
var invalidTxtPass = document.getElementById("invalidTxtPass")
var logInPage = document.getElementById("logInPage");
var formUserName = document.getElementById("formUserName");
var formUserPassword = document.getElementById("formUserPassword");
var logIn = document.getElementById("logIn");
function removeInvalidClassUser() {
    invalidTxtUser.style.opacity = "0"
    formUserName.classList.remove("invalidInput");

}
function removeInvalidClassPass() {
    invalidTxtPass.style.opacity = "0"
    formUserPassword.classList.remove("invalidInput");

}
function verifyLoginCredentials() {
    InputedUserName = formUserName.value;
    InputedUserPasword = formUserPassword.value;
    users.forEach(user => {
        if (InputedUserName === user.userName && InputedUserPasword === user.userPassword) {
            document.removeEventListener("keydown", checkIfPressedKeyIsEnter)
            logIn.removeEventListener("click", verifyLoginCredentials);
            user.logedIn = true;
            localStorage.setItem("storedID", `${user.userId}`);
            localStorage.setItem("storedLogInInfo", `${user.logedIn}`);
            logInPage.style.display = "none";
            translateGame();
            showStartMenu();
        }
        else if (!(InputedUserName === user.userName) && InputedUserPasword === user.userPassword) {
            invalidTxtUser.style.opacity = "1"
            formUserName.classList.add("invalidInput");
            setTimeout(removeInvalidClassUser, 5000);
        }
        else if (InputedUserName === user.userName && (!(InputedUserPasword === user.userPassword))) {
            invalidTxtPass.style.opacity = "1"
            formUserPassword.classList.add("invalidInput");
            setTimeout(removeInvalidClassPass, 5000);
        }
    });
}
function checkIfPressedKeyIsEnter(e) {
    if (e.key === "Enter") {
        verifyLoginCredentials();
    }
}
function checkifUserIsAlreadyLoggedIn() {
    if (localStorage.getItem("storedLogInInfo") === "true") {
        logInPage.style.display = "none";
        if (!(localStorage.getItem("settingPageOpen") === "true")) {
            translateGame();
            showStartMenu();
        }
        else {
            openSetting();
        }
    }
    else {
        logInPage.style.display = "flex";
        translateGame();
        if (localStorage.getItem("MusVol") == undefined && localStorage.getItem("SoundVol") == undefined) {
            musicVolumeController.value = 50;
            soundEffectVolumeController.value = 50;
            localStorage.setItem("MusVol", `${50 / 100}`);
            localStorage.setItem("SoundVol", `${50 / 100}`);
        }
        if (window.innerWidth < 450) {
            localStorage.setItem("mobileDevice", "true")
        }
        logIn.addEventListener("click", verifyLoginCredentials);
        document.addEventListener("keydown", checkIfPressedKeyIsEnter);
    }
}
checkifUserIsAlreadyLoggedIn();

