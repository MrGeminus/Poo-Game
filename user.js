export { users };
var male = "male";
var female = "female";
var globalScore;
function initializeGlobalScore() {
    if (localStorage.getItem("globalScore") == undefined) {
        globalScore = 0;
    }
    else {
        globalScore = Number(localStorage.getItem("globalScore"));
    }
}
initializeGlobalScore();
class User {
    constructor(userId, userName, userPassword, avatar, userGlobalScore, logedIn, userMoveLeft, userMoveRight, userMoveUp, userMoveDown, userPauseGame, userStartGame, userMainMenu) {
        this.userId = userId;
        this.userName = userName;
        this.userPassword = userPassword;
        this.avatar = avatar;
        this.userGlobalScore = userGlobalScore;
        this.logedIn = logedIn;
    }
}

var users = [new User(1, "admin", "admin", male, globalScore, false),
new User(2, "TestUser1", "Test111", female, globalScore, false),
new User(3, "TestUser2", "Test222", female, globalScore, false),
new User(4, "TestUser3", "Test333", female, globalScore, false),
new User(5, "TestUser4", "Test444", male, globalScore, false),
new User(6, "TestUser5", "Test555", male, globalScore, false),
new User(7, "TestUser6", "Test666", male, globalScore, false),
new User(8, "TestUser7", "Test777", male, globalScore, false)]