var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE


    //creates obstacle types

    var win = false


    function createSawBlade(x,y){
      //sets the hitbox size
      var hitZoneSize = 25;
      //sets how much damage is taken
      var damageFromObstacle = 10;
      //creates the obsticle
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      //sets the hitbox x
      sawBladeHitZone.x = x;
      //sets the hitbox y 
      sawBladeHitZone.y = y;
      //adds the hitzone
      game.addGameItem(sawBladeHitZone);
      //adds the visuals for the sawblade
      var obstacleImage = draw.bitmap("img/sawblade.png");
      //adds the image to the sawBladeHitZone as a child
      sawBladeHitZone.addChild(obstacleImage);
      //fixes the image x
      obstacleImage.x = -25
      //fixes the image y
      obstacleImage.y = -25
      //sets sawblade speed to 3
      sawBladeHitZone.velocityX = -3;

    }
    function createTwitter(x,y){
      //sets the hitbox size
      var hitZoneSize = 65;
      //sets how much damage is taken
      var damageFromObstacle = 10;
      //creates the obsticle
      var twitterHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      //sets the hitbox x

       //sets the hitbox x scale
       twitterHitZone.scaleX = 0.4;
       //sets the hitbox y scale
       twitterHitZone.scaleY = 0.4;

      //sets the hitbox x
      twitterHitZone.x = x;
      //sets the hitbox y 
      twitterHitZone.y = y;
      //adds the hitzone
      game.addGameItem(twitterHitZone);
      //adds the visuals for the twitter
      var obstacleImage = draw.bitmap("img/twitter.png");
      //adds the image to the twitterHitZone as a child
      twitterHitZone.addChild(obstacleImage);
      //fixes the image x
      obstacleImage.x = -110
      //fixes the image y
      obstacleImage.y = -110
      //sets speed to 3
      twitterHitZone.velocityX = -3;

    }
    function createWallnut(x,y){
      //sets the hitbox size
      var hitZoneSize = 15;
      //sets how much damage is taken
      var damageFromObstacle = 10;
      //creates the obsticle
      var WallnutHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      //sets the hitbox x
      WallnutHitZone.x = x;
      //sets the hitbox y 
      WallnutHitZone.y = y;
      

      //sets the hitbox x scale
      WallnutHitZone.scaleX = 1.1;
      //sets the hitbox y scale
      WallnutHitZone.scaleY = 1.1;
      //adds the hitzone
      game.addGameItem(WallnutHitZone);
      //adds the visuals for the  wallnut
      var obstacleImage = draw.bitmap("img/Wallnut.png");
      //adds the image to the wallnutHitZone as a child
      WallnutHitZone.addChild(obstacleImage);
      //fixes the image x
      obstacleImage.x = -25
      //fixes the image y
      obstacleImage.y = -25
      //sets speed to 3
      WallnutHitZone.velocityX = -3;
    }



//creates enemy types
    function createEnemy(x,y){

      //creates game item and stores in the variable enemy
      var enemy = game.createGameItem("enemy", 25);
      //draws the square
      var redSquare = draw.rect(50, 50, "red");
      //sets the x
      redSquare.x = -25;
       //sets the y
      redSquare.y = -25;
       //adds enemy to background
      enemy.addChild(redSquare);

      enemy.x = x;
      enemy.y = y;
      //creates the game item
      game.addGameItem(enemy);
      //sets the speed of the enemy
      enemy.velocityX = -3;

      enemy.onPlayerCollision = function(){
        game.changeIntegrity(-15);
      }

      enemy.onProjectileCollision = function(){
        game.increaseScore(100);
        enemy.fadeOut();
        //enemy.Shrink();
        //enemy.flyTo(0,0);
      }

    }
    function createNormie(x,y){

      //creates game item and stores in the variable enemy
      var Normie = game.createGameItem("enemy", 75);
      //draws the square
      var whiteSquare = draw.rect(125,125, "white");
      //sets the x
      whiteSquare.x = -70;
       //sets the y
       whiteSquare.y = -70;
       //adds reward to background
      Normie.addChild(whiteSquare);
      //sets normie x to x
      Normie.x = x;
      //sets normie y to y
      Normie.y = y;
      //sets normie x scale to .4
      Normie.scaleX = -.40;
      //sets normie y scale to .4
      Normie.scaleY = .40;
      //creates the game item
      game.addGameItem(Normie);
      //sets the speed of the enemy
      Normie.velocityX = -3;

    

      var obstacleImage = draw.bitmap("img/normie.png");
      //adds the image to the sawBladeHitZone as a child
      Normie.addChild(obstacleImage);
      //fixes the image x
      obstacleImage.x = -140
      //fixes the image y
      obstacleImage.y = -100

      //detects on player Collision
      Normie.onPlayerCollision = function(){
        //takes 15 health from plater
        game.changeIntegrity(-15);
      }
      //detects projectile collision
      Normie.onProjectileCollision = function(){
        //adds 100 score points
        game.increaseScore(100);
        //fades out normie
        Normie.fadeOut();
      }
    }
    function createNerd(x,y){

      //creates game item and stores in the variable enemy
      var Nerd = game.createGameItem("enemy", 55);
      //draws the square
      var whiteCircle = draw.circle(55,"white", "black");
      //sets the x
      whiteCircle.x = 0;
       //sets the y
      whiteCircle.y = 0;
       //adds reward to background
      Nerd.addChild(whiteCircle);
      //sets nerd x to x
      Nerd.x = x;
      //sets nerd y to y
      Nerd.y = y;
      //sets nerd x scale to .8
      Nerd.scaleX = -.80;
      //sets nerd y scale to .8
      Nerd.scaleY = .80;
      //creates the game item
      game.addGameItem(Nerd);
      //sets the speed of the enemy
      Nerd.velocityX = -3;

    

      var obstacleImage = draw.bitmap("img/Nerd.png");
      //adds the image to the sawBladeHitZone as a child
      Nerd.addChild(obstacleImage);
      //fixes the image x
      obstacleImage.x = whiteCircle.x -60
      //fixes the image y
      obstacleImage.y = whiteCircle.y - 60

      //detects player collision
      Nerd.onPlayerCollision = function(){
        //takes 15 health from player
        game.changeIntegrity(-15);
      }
  
      Nerd.onProjectileCollision = function(){
        game.increaseScore(100);
        Nerd.fadeOut();
      }
    }


//creates reward types
    function createReward(x,y){

      //creates game item and stores in the variable enemy
      var reward = game.createGameItem("enemy", 25);
      //draws the square
      var blueSquare = draw.rect(50, 50, "blue");
      //sets the x
      blueSquare.x = -25;
       //sets the y
       blueSquare.y = -25;
       //adds reward to background
      reward.addChild(blueSquare);
      //assigns reward x to x
      reward.x = x;
      //assigns reward y to y
      reward.y = y;
      //creates the game item
      game.addGameItem(reward);
      //sets the speed of the enemy
      reward.velocityX = -3;
      //detect player collision
      reward.onPlayerCollision = function(){
        //adds 15 health
        game.changeIntegrity(15);
        //fades out reward
        reward.fadeOut();
      }
      //detects projectile collision
      reward.onProjectileCollision = function(){
        //adds 100 score points
        game.increaseScore(100);
        //fades out reward
        reward.fadeOut();
      
      }

    }
    function createDogeCoin(x,y){

      //creates game item and stores in the variable enemy
      var DogeCoin = game.createGameItem("enemy", 25);
      //draws the square
      var goldCoin = draw.circle(295,"yellow", "black");
      //sets the x
      goldCoin.x = -1;
      //sets the y
      goldCoin.y = -1;
      //adds reward to background
      DogeCoin.addChild(goldCoin);
      //creates dogecoin x and assigns it the x variable
      DogeCoin.x = x;
      //creates dogecoin y and assigns it the y variable
      DogeCoin.y = y;
      //scales the y to .1
      DogeCoin.scaleX = 0.10
      DogeCoin.scaleY = 0.10
      //creates the game item
      game.addGameItem(DogeCoin);
      //sets the speed of the enemy
      DogeCoin.velocityX = -3;
      //detects player collision
      DogeCoin.onPlayerCollision = function(){
        //adds 15 health
        game.changeIntegrity(15);
        //fades out dogecoin
        DogeCoin.fadeOut();
      }
      //detects project collision
      DogeCoin.onProjectileCollision = function(){
        //adds 100 score points
        game.increaseScore(100);
        //fades out dogecoin
        DogeCoin.fadeOut();
      
      }
      var obstacleImage = draw.bitmap("img/dogecoin-og-logo.png");
      //adds the image to the sawBladeHitZone as a child
      DogeCoin.addChild(obstacleImage);
      //fixes the image x
      obstacleImage.x = -540
      //fixes the image y
      obstacleImage.y = -400
    }
    function createPainting(x,y){

      //creates game item and stores in the variable enemy
      var painting = game.createGameItem("enemy", 105);
      //draws the square
      var yellowRect = draw.rect(200, 250, "yellow");
      //sets the x
      yellowRect.x = -100;
       //sets the y
       yellowRect.y = -100;
       //adds reward to background
      painting.addChild(yellowRect);
      //creates painting x and assigns it the x variable
      painting.x = x;
      //creates painting y and assigns it the y variable
      painting.y = y;
      //scales the x to .4
      painting.scaleX = .40;
      //scales the y to .4
      painting.scaleY = .40;
      //creates the game item
      game.addGameItem(painting);
      //sets the speed of the enemy
      painting.velocityX = -3;

      //detects collision with player
      painting.onPlayerCollision = function(){
        //adds 15 health
        game.changeIntegrity(15);
        //adds 100 score points
        game.increaseScore(100);
        //fades out painting
        painting.fadeOut();
      }
      //detects collision with projectile
      painting.onProjectileCollision = function(){
        //adds 100 score
        game.increaseScore(100);
        //fades out painting
        painting.fadeOut();
      
      }

      var obstacleImage = draw.bitmap("img/squidward.png");
      //adds the image to the sawBladeHitZone as a child
      painting.addChild(obstacleImage);
      //fixes the image x
      obstacleImage.x = -100
      //fixes the image y
      obstacleImage.y = -100

    }
    function createPepe(x,y){

      //creates game item and stores in the variable enemy
      var Pepe = game.createGameItem("enemy", 20);
      //draws the square
      var greenCoin = draw.circle(185,"green", "black");
      //sets the x
      greenCoin.x = -1;
       //sets the y
       greenCoin.y = -1;
       //adds reward to background
       Pepe.addChild(greenCoin);
      
       Pepe.x = x;
       Pepe.y = y;

       Pepe.scaleX = 0.20
       Pepe.scaleY = 0.20
      //creates the game item
      game.addGameItem(Pepe);
      //sets the speed of the enemy
      Pepe.velocityX = -3;
//detects when pepe collides with player
      Pepe.onPlayerCollision = function(){
        //adds 15 health
        game.changeIntegrity(15);
        //adds 100 score points
        game.increaseScore(100);
        //fades out pepe
        Pepe.fadeOut();
      }
//detects when pepe collides with projectile
      Pepe.onProjectileCollision = function(){
        //adds 100 score points
      game.increaseScore(100);
        //fades out pepe
      Pepe.fadeOut();
      
      }
      var obstacleImage = draw.bitmap("img/pepe.png");
      //adds the image to the sawBladeHitZone as a child
      Pepe.addChild(obstacleImage);
      //fixes the image x
      obstacleImage.x = -240
      //fixes the image y
      obstacleImage.y = -210
    }

   


//creates level marker
    function createMarker(x,y){

      //creates game item and stores in the variable enemy
      var marker = game.createGameItem("enemy", 25);
      //draws the square
      var yellowSquare = draw.rect(50, 50, "yellow");
      //sets the x
      yellowSquare.x = -25;
       //sets the y
       yellowSquare.y = -25;
       //adds marker to background
      marker.addChild(yellowSquare);
      
      marker.x = x;
      marker.y = y;
      //creates the game item
      game.addGameItem(marker);
      //sets the speed of the enemy
      marker.velocityX = -3;

      marker.onPlayerCollision = function(){
        game.increaseScore(100);
        game.changeIntegrity(50)
        marker.fadeOut();
        startLevel();
     
      }

      marker.onProjectileCollision = function(){
        game.increaseScore(100);
        game.changeIntegrity(50)
        marker.fadeOut();
        startLevel();
     
      }

    }


   


  


    function startLevel() {
      // TODO 13 goes below here

      //creates shorthands
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems;


      for(var i = 0 ; i < levelObjects.length; i++){
        //accesses data in level.gameItems
        var element = levelObjects[i];

        if(element.type === "sawblade"){
          createSawBlade(element.x, element.y);
        }

        if(element.type === "enemy"){
          createEnemy(element.x, element.y,);
        }

        if(element.type === "reward"){
          createReward(element.x, element.y,);
        }

        if(element.type === "marker"){
          createMarker(element.x, element.y,);
        }
        
        
        if(element.type === "DogeCoin"){
          createDogeCoin(element.x, element.y,);
        }

        if(element.type === "painting"){
          createPainting(element.x, element.y,);
        }

        if(element.type === "pepe"){
          createPepe(element.x, element.y,);
        }

        if(element.type === "normie"){
          createNormie(element.x, element.y,);
        }

        if(element.type === "nerd"){
          createNerd(element.x, element.y,);
        }

        if(element.type === "wallnut"){
          createWallnut(element.x, element.y,);
        }

        if(element.type === "twitter"){
          createTwitter(element.x, element.y,);
        }
        }
      

   

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
