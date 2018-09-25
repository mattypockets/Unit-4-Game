$(document).ready(function(){

// Set base variables 
let wins = 0;
let losses = 0;
let attackPower = 0;
let health = 0;
let steven = 0;
let garnet = 0;
let amethyst = 0;
let pearl = 0;


// Generate random attack values between 1-12
var randomAttackSet = function(){
    var num = Math.floor(Math.random() * 12 + 1);
    return num;
}

// Assign random attack values to characters
const attackSet = function(){
    steven += randomAttackSet();
    garnet += randomAttackSet();
    amethyst += randomAttackSet();
    pearl += randomAttackSet();
};

attackSet();

// Generate random enemy health
var randomEnemyHealth = function (){
    let random = Math.floor(Math.random() * 120 + 19);
    health += random;
}

randomEnemyHealth();
$(".health").html(health);

// When clicked, add attack power to total
$(".crystalGem").on("click", function() {
    if (this.id === "steven"){
        attackPower += steven;
    } else if (this.id === "garnet"){
        attackPower += garnet;
    } else if (this.id === "amethyst"){
        attackPower += amethyst;
    } else if (this.id === "pearl"){
        attackPower += pearl;
    }

    $(".attackPower").html(attackPower);
    winLose ();
    
});

var winLose = function () {
    if (attackPower === health) {
        wins ++;
        $(".wins").text(wins);
        newGame();
    }  else if (attackPower > health) {
        losses ++;
        $(".losses").text(losses);
        newGame();
    }
}

// New Game
var newGame = function(){
    steven = 0;
    garnet = 0;
    amethyst = 0;
    pearl = 0;
    health = 0;
    randomEnemyHealth()
    $(".health").html(health);
    attackPower = 0;
    attackSet();
    $(".attackPower").html(attackPower);
};


// Click characters to add attack rates to attack power

// Check if attackPower = health
    // If attackPower = health then add one win
    // If attackPower < health, keep playing
    // If attackPower > health, game over and + loss
    // If gameOver, start new game on next click

});