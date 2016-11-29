"use strict";

var Robot = (function(rustyRobot) {

  rustyRobot.Weapon = function() {
    this.name = "bare hands";
    this.damage = 1;
  };

  rustyRobot.machineGun = function() {
    this.name = "Machine Gun";
    this.damage = 15;
  };
  rustyRobot.machineGun.prototype = new rustyRobot.Weapon();

  rustyRobot.dualMachineGun = function() {
    this.name = "Dual Machine Gun";
    this.damage = 20;
  };
  rustyRobot.dualMachineGun.prototype = new rustyRobot.Weapon();

  rustyRobot.dancingRobotMoves= function() {
    this.name = "Dancing Robot Moves";
    this.damage = 5;
  };
  rustyRobot.dancingRobotMoves.prototype = new rustyRobot.Weapon();

  rustyRobot.robotBrainPower= function() {
    this.name = "robotBrainPower";
    this.damage =19 ;
  };
   rustyRobot.robotBrainPower.prototype = new rustyRobot.Weapon();

  rustyRobot.laser= function() {
    this.name = "Laser";
    this.damage =19 ;
  };
   rustyRobot.laser.prototype = new rustyRobot.Weapon();

   rustyRobot.ionBlaster = function() {
    this.name = "Ion Blaster";
    this.damage =30;
  };
   rustyRobot.ionBlaster.prototype = new rustyRobot.Weapon();

return rustyRobot;

})(Robot || {});