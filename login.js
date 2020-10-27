import { users } from "./user.js";
import { openControls } from "./settings.js";
import { showStartMenu } from "./game.js";
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
        showStartMenu();
    }
    else {
        logInPage.style.display = "flex";
        logIn.addEventListener("click", verifyLoginCredentials);
        document.addEventListener("keydown", checkIfPressedKeyIsEnter);
    }
}
checkifUserIsAlreadyLoggedIn();
