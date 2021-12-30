// this creates a function named "fight"

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyHealth, enemyAttack);

var fight = function() {
// Alert players that they are starting the round 
  window.alert("Welcome to Robot Gladiators!");

  // ask player if they'd like to fight or run

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");

// if player chooses to fight, then fight

if (promptFight === "fight" || promptFight === "FIGHT") {
// remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
console.log(
    playerName + "attacked" + " Roborto " + ". " + " Roborto " + " now has " + 40 + " health remaining. "
);

// check enemy's health

if (40 <= 0) {
    window.alert("Roborto" + " has died!");
}
else {
    window.alert("Roborto" + " still has " + 40 + " health left. ");
}

//remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log(
    "Roborto" + " attacked " + playerName + ". " + playerName + " now has " + 88 + " health remaining. " 
  ); 

  //check player's health

if (88 <= 0) {
    window.alert(playerName + " has died!");
}
else {
    window.alert(playerName + " still has " + 88 + " health left.");
}

// if player chooses to skip

} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm(" Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight.  Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney -2;
    }
// if no (false), ask question again by running fight () again else {
    else {
    fight();
}
// if player did not choose 1 or 2 in prompt 
} else {
window.alert("You need to pick a valid option. Try again!");
}
};

// run fight function to start game
fight();
