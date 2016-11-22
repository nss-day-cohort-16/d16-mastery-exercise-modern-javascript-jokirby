// "use strict";
// var Robot = (function(rustyRobot) {


// $('#attack_button').click(function() {attack_time();});


// rustyRobot.attack_time = function() {
//   if (newPlayerOne.health > 0 & newPlayerTwo.health > 0) {
//     newPlayerOne.health = newPlayerOne.health - newPlayerTwo.weapon.damage;
//     $(".newPlayerOne").html("Health: " + newPlayerOne.health);
//     newPlayerTwo.health = newPlayerTwo.health - newPlayerOne.weapon.damage;
//     $(".newPlayerTwo").html("Health: " + newPlayerTwo.health);

//     } else if (newPlayerOne.health <= 0) {
//       alert("K.O.! " + newPlayerTwo.name + " wins!");
//       $('#attack_button').unbind().disabled = true;
//       $('#attack_button').hide();

//     } else if (newPlayerTwo.health <= 0) {
//       alert("K.O.! " + newPlayerOne.name + " wins!");
//        $('#attack_button').unbind().disabled = true;
//        $('#attack_button').hide();
//     }
//   };

//  return rustyRobot;

// })(Robot || {});