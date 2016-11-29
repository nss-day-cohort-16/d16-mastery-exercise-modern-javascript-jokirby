"use strict";

var Robot = (function(rustyRobot) {

  rustyRobot.Swarm = {};

  //--------------------------------[ HEALTH FUNCTION (50-80) ]-------------------------------//
rustyRobot.getRandomInt = function(bonus) {
  let min = Math.ceil(50 + bonus),
  max = Math.floor(80 + bonus);
  return Math.floor(Math.random() * (((80 + bonus) - (50 + bonus)) + 1)) + (50 + bonus);
};


// -------------------------[ BASE FUNCTION FOR A ROBOT ] ----------------------------//
  rustyRobot.Swarm.BaseModel = function() {
    this.name = "Bob";
    this.healthBonus = rustyRobot.getRandomInt(0);
    this.strengthBonus = 0;
    this.intelligenceBonus = 0;

    this.toString = function() {
      return this.name;
    };
  };

//-----------------------------------[ DRONE ]------------------------------------//
   rustyRobot.Swarm.Drone = function() {
    this.name = "Drone";
    this.speed = +35;
    this.aerial = true;
    this.special = "Nothing special here.";
  };
  rustyRobot.Swarm.Drone.prototype = new rustyRobot.Swarm.BaseModel();


  rustyRobot.Swarm.Tricopter = function() {
    this.name = "Tricopter";
    this.healthBonus = rustyRobot.getRandomInt(5);
    this.strengthBonus = +5;
    this.weapon = "Machine Gun";
    this.weaponDamage = 15;
  };
  rustyRobot.Swarm.Tricopter.prototype = new rustyRobot.Swarm.Drone();

   rustyRobot.Swarm.Octocopter = function() {
    this.name = "Octocopter";
    this.healthBonus = rustyRobot.getRandomInt(10);
    this.strengthBonus = + 10;
    this.weapon = "Dual Machine Gun";
    this.weaponDamage = 20;
  };
  rustyRobot.Swarm.Octocopter.prototype = new rustyRobot.Swarm.Drone();

//-----------------------------------[ Humanoid ]------------------------------------//
   rustyRobot.Swarm.Humanoid = function() {
    this.name = "Humanoid";
    this.healthBonus = rustyRobot.getRandomInt(5);
    this.intelligenceBonus = +40;
    this.aerial = false;
    this.speed = 0;
    this.special = "Hacked!";
  };
  rustyRobot.Swarm.Humanoid.prototype = new rustyRobot.Swarm.BaseModel();


  rustyRobot.Swarm.Bender = function() {
    this.name = "Bender";
    this.healthBonus = rustyRobot.getRandomInt(15);
    this.strengthBonus = +5;
    this.intelligenceBonus = -30;
    this.weapon = "Dancing Robot Moves";
    this.weaponDamage = 5;
  };
  rustyRobot.Swarm.Bender.prototype = new rustyRobot.Swarm.Humanoid();

   rustyRobot.Swarm.Bernard = function() {
    this.name = "Bernard";
    this.healthBonus = rustyRobot.getRandomInt(10);
    this.intelligenceBonus = +40;
    this.weapon = "ROBOT BRAIN POWER";
    this.weaponDamage = 19;
  };
  rustyRobot.Swarm.Bernard.prototype = new rustyRobot.Swarm.Humanoid();

//-----------------------------------[ ATV ]------------------------------------//
  rustyRobot.Swarm.Atv = function() {
    this.name = "Atv";
    this.healthBonus = rustyRobot.getRandomInt(10);
    this.strengthBonus = +10;
    this.speed = +10;
    this.aerial = false;
    this.special = "Rocket Launcher"; //------------------------------------> DOUBLE DAMAGE!
  };
  rustyRobot.Swarm.Atv.prototype = new rustyRobot.Swarm.BaseModel();


  rustyRobot.Swarm.WALLE = function() {
    this.name = "WALLE";
    this.healthBonus = rustyRobot.getRandomInt(15);
    this.weapon = "Laser";
    this.weaponDamage = 16;
    this.strengthBonus = -5;
    this.special = "mini-rockets";
  };
  rustyRobot.Swarm.Drone.prototype = new rustyRobot.Swarm.Atv();

  rustyRobot.Swarm.Prime = function() {
    this.name = "Optimus Prime";
    this.healthBonus = rustyRobot.getRandomInt(20);
    this.strengthBonus = this.strengthBonus + 30;
    this.weapon = "Ion Blaster";
    this.weaponDamage = 30;
  };
  rustyRobot.Swarm.Prime.prototype = new rustyRobot.Swarm.Atv();


  return rustyRobot;

})(Robot || {});