function d6() {
    var roll = Math.random();
    roll = Math.floor(roll * 6) + 1;
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);