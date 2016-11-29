"use strict";
var Robot = (function(rustyRobot) {

//-----------------------------[ PLAYER ONE OBJECT ]-------------------------------//
let newPlayerOne = new rustyRobot.Combatants.Player(),
    playerOneInput = $('#player_one_input');

//----[ SELECT ROBOT-CLASS ]
  $("#dropdown_one").change(function(event) {
    $('#player_card_1').html("");
    let selectedText = $(this).find(':selected').text();
    rustyRobot.selectRobot(selectedText);
  });

  rustyRobot.selectRobot = function(selectedText) {

    switch (selectedText) {
      case "Tricopter":
        newPlayerOne.class = new rustyRobot.Swarm.Tricopter();
        rustyRobot.addPlayer1ToDom();
        console.log("Case: Tricopter", newPlayerOne);
        break;
      case "Octocopter":
        newPlayerOne.class = new rustyRobot.Swarm.Octocopter();
        rustyRobot.addPlayer1ToDom();
        console.log("Case: Octocopter", newPlayerOne);
        break;
      case "Bender":
        newPlayerOne.class = new rustyRobot.Swarm.Bender();
        rustyRobot.addPlayer1ToDom();
        console.log("Case: Bender", newPlayerOne);
        break;
      case "Bernard":
        newPlayerOne.class = new rustyRobot.Swarm.Bernard();
        rustyRobot.addPlayer1ToDom();
        console.log("Case: Bernard", newPlayerOne);
        break;
      case "WALLE":
        newPlayerOne.class = new rustyRobot.Swarm.WALLE();
        rustyRobot.addPlayer1ToDom();
        console.log("Case: Bender", newPlayerOne);
        break;
      case "Optimus Prime":
        newPlayerOne.class = new rustyRobot.Swarm.Prime();
        rustyRobot.addPlayer1ToDom();
        console.log("Case: Bernard", newPlayerOne);
        break;
    }
  };

//--------------------------[ PLAYER TWO OBJECT ]-------------------------------//
let newPlayerTwo = new rustyRobot.Combatants.Player(),
    playerTwoInput = $('#player_two_input');

//----[ SELECT ROBOT-CLASS ]
  $("#dropdown_two").change(function(event) {
    $('#player_card_2').html("");
    let selectedText = $(this).find(':selected').text();
    rustyRobot.selectRobot2(selectedText);
 });

 rustyRobot.selectRobot2 = function(selectedText) {

    switch (selectedText) {
      case "Tricopter":
        newPlayerTwo.class = new rustyRobot.Swarm.Tricopter();
        rustyRobot.addPlayer2ToDom();
        console.log("Case: Tricopter", newPlayerTwo);
        break;
      case "Octocopter":
        newPlayerTwo.class = new rustyRobot.Swarm.Octocopter();
        rustyRobot.addPlayer2ToDom();
        console.log("Case: Octocopter", newPlayerTwo);
        break;
      case "Bender":
        newPlayerTwo.class = new rustyRobot.Swarm.Bender();
        rustyRobot.addPlayer2ToDom();
        console.log("Case: Bender", newPlayerTwo);
        break;
      case "Bernard":
        newPlayerTwo.class = new rustyRobot.Swarm.Bernard();
        rustyRobot.addPlayer2ToDom();
        console.log("Case: Bernard", newPlayerTwo);
        break;
      case "WALLE":
        newPlayerTwo.class = new rustyRobot.Swarm.WALLE();
        rustyRobot.addPlayer2ToDom();
        console.log("Case: Bender", newPlayerTwo);
        break;
      case "Optimus Prime":
        newPlayerTwo.class = new rustyRobot.Swarm.Prime();
        rustyRobot.addPlayer2ToDom();
        console.log("Case: Bernard", newPlayerTwo);
        break;
    }
  };

//--------------------------[ PLAYER NAME (1 & 2)]------------------------//
playerOneInput.keyup(function () {rustyRobot.instantAdd(playerOneInput.val());});

 rustyRobot.instantAdd  = function(input) {
  newPlayerOne.playerName = (input);
  $('#p1Name').html(input);
};

playerTwoInput.keyup(function () {rustyRobot.instantAdd2(playerTwoInput.val());});

 rustyRobot.instantAdd2 = function(input) {
  newPlayerTwo.playerName = (input);
  $('#p2Name').html(input);
};

  //-----------------------------------------[ Adding Player One Card to DOM ]-------------------------------------//
  rustyRobot.addPlayer1ToDom = function () {
    newPlayerOne.healthWithBonus = newPlayerOne.health + newPlayerOne.class.healthBonus;
    newPlayerOne.class.overallDamage = newPlayerOne.class.weaponDamage + newPlayerOne.class.strengthBonus;
    console.log(' addPlayersToDom running');
  $('#player_card_1').append(`<div class="card-block">
                            <h5 class="card-text">Class: ${newPlayerOne.class}</h5>
                            <span class="card-text">Weapon: ${newPlayerOne.class.weapon}</span><br>
                            <span class="card-text">Weapon Damage: ${newPlayerOne.class.weaponDamage}</span>
                            <span class="card-text">Strength Bonus: ${newPlayerOne.class.strengthBonus}</span>
                            <span class="card-text">Overall Damage: ${newPlayerOne.class.overallDamage}</span>
                            <span class="card-text">Special: ${newPlayerOne.class.special}</span><br>
                            <span class="card-text playerOneHealth">Health: ${newPlayerOne.healthWithBonus}</span><br>
                            <span class="card-text">Type Aerial: ${newPlayerOne.class.aerial}</span><br>
                            </div><img src="images/bender.gif" alt="Card image">`);
  };

  //-----------------------------------[ Adding Player Two Card to DOM ]------------------------------------//
  rustyRobot.addPlayer2ToDom = function () {
    newPlayerTwo.healthWithBonus = newPlayerTwo.health + newPlayerTwo.class.healthBonus;
    newPlayerTwo.class.overallDamage = newPlayerTwo.class.weaponDamage + newPlayerTwo.class.strengthBonus;
  $('#player_card_2').append(`<div class="card-block2">
                            <h5 class="card-text">Class: ${newPlayerTwo.class}</h5><br>
                            <span class="card-text">Weapon: ${newPlayerTwo.class.weapon}</span><br>
                            <span class="card-text">Weapon Damage: ${newPlayerTwo.class.weaponDamage}</span>
                            <span class="card-text">Strength Bonus: ${newPlayerTwo.class.strengthBonus}</span>
                            <span class="card-text">Overall Damage: ${newPlayerTwo.class.overallDamage}</span>
                            <span class="card-text">Special: ${newPlayerTwo.class.special}</span><br>
                            <span class="card-text playerTwoHealth">Health: ${newPlayerTwo.healthWithBonus}</span><br>
                            <span class="card-text">Type Aerial: ${newPlayerTwo.class.aerial}</span><br>
                            </div><img id="walle" src="images/walle.gif" alt="Card image">`);
  };

//-------------------------------[ ATTACK! ]-----------------------------------//
$('#attack_button').click(function() {rustyRobot.attack_time();});


rustyRobot.attack_time = function() {   
  if (newPlayerOne.healthWithBonus > 0 && newPlayerTwo.healthWithBonus > 0) {

    //-------[ Player One Attacked By Player Two ]
    newPlayerOne.healthWithBonus = newPlayerOne.healthWithBonus - newPlayerTwo.class.weaponDamage;
    $(".playerOneHealth").html("Health: " + newPlayerOne.healthWithBonus);
    if(newPlayerOne.healthWithBonus <= 0) {
     alert("K.O.! " + newPlayerTwo.playerName + " wins!");
      $('#attack_button').unbind().disabled = true;
      $('#attack_button').hide();
    }

    //-------[ Player Two Attacked By Player One ]
    newPlayerTwo.healthWithBonus = newPlayerTwo.healthWithBonus - newPlayerOne.class.weaponDamage;
    $(".playerTwoHealth").html("Health: " + newPlayerTwo.healthWithBonus);
    if(newPlayerTwo.healthWithBonus <= 0) {
      alert("K.O.! " + newPlayerOne.playerName + " wins!");
       $('#attack_button').unbind().disabled = true;
       $('#attack_button').hide();
    }

    //-------[ PLAYER TWO WINS ]
    } else if (newPlayerOne.healthWithBonus <= 0) {
      alert("K.O.! " + newPlayerTwo.playerName + " wins!");
      $('#attack_button').unbind().disabled = true;
      $('#attack_button').hide();

    //-------[ PLAYER ONE WINS ]
    } else if (newPlayerTwo.healthWithBonus <= 0) {
      alert("K.O.! " + newPlayerOne.playerName + " wins!");
       $('#attack_button').unbind().disabled = true;
       $('#attack_button').hide();
    }
  };

 return rustyRobot;

})(Robot || {});
