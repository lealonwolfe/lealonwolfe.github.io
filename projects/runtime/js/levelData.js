var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data



//sawblade,wallnut,,twitter,DogeCoin,painting,pepe,normie,nerd, marker




    var levelData = [
      {
        name: "bingus",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 500, y: groundY - 120},
          { type: "sawblade", x: 600, y: groundY - 120},
          { type: "normie", x: 900, y: groundY - 90},
          { type: "nerd", x: 1200, y: groundY - 50},
          { type: "wallnut", x: 1400, y: groundY - 40},
          { type: "painting", x: 2100, y: groundY - 75},
          { type: "DogeCoin", x: 2200, y: groundY - 75},
          { type: "twitter", x: 2500, y: groundY - 75},
          { type: "pepe", x: 3000, y: groundY - 75},
          { type: "marker", x: 4000, y: groundY - 50},
      
        ],
      },
      {
        name: "bazinga",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 120},
          { type: "sawblade", x: 600, y: groundY - 120},
          { type: "sawblade", x: 900, y: groundY - 120},
          { type: "normie", x: 900, y: groundY - 90},
          { type: "nerd", x: 1200, y: groundY - 50},
          { type: "wallnut", x: 1400, y: groundY - 40},
          { type: "painting", x: 2000, y: groundY - 75},
          { type: "DogeCoin", x: 2200, y: groundY - 75},
          { type: "twitter", x: 2500, y: groundY - 75},
          { type: "pepe", x: 3000, y: groundY - 75},
          { type: "marker", x: 4000, y: groundY - 50}
        ],
      },
      {
        name: "bingus returns",
        number: 3,
        speed: -3,
        gameItems: [
          {
            name: "Robot Rampage",
            number: 2,
            speed: -3,
            gameItems: [
              { type: "sawblade", x: 400, y: groundY - 120},
              { type: "sawblade", x: 600, y: groundY - 120},
              { type: "sawblade", x: 900, y: groundY - 120},
              { type: "normie", x: 900, y: groundY - 90},
              { type: "nerd", x: 1200, y: groundY - 50},
              { type: "wallnut", x: 1400, y: groundY - 40},
              { type: "painting", x: 2000, y: groundY - 75},
              { type: "DogeCoin", x: 2200, y: groundY - 75},
              { type: "twitter", x: 2500, y: groundY - 75},
              { type: "pepe", x: 3000, y: groundY - 75},
              { type: "marker", x: 4000, y: groundY - 50}
            ],
          },
        ],
      },


    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
