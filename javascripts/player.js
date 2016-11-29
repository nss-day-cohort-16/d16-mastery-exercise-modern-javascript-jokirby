"use strict";

var Robot = (function(rustyRobot) {
	rustyRobot.Combatants = {};

  /*
    Define the base object for a player
   */
  rustyRobot.Combatants.Player = function(name) {
    this.type = null;
    this.weapon = null;
    this.health = 100;
    this.strength = 50;
    this.playerName = null;
  };

  return rustyRobot;

})(Robot || {});
