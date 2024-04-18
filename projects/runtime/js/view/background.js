var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var harambe;
        var floor;
        var floor2;
        var buildings = [];



      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,canvasHeight,'#6EB1FF');
            background.addChild(backgroundFill);
            
            // TODO 2: - Add a moon and starfield
            
            //creates 100 stars
            for(var stars = 0; stars < 100; stars++){
                //creates circle
                var circle = draw.circle(10, "white", "LightGray", 2);
                //creates an X
                circle.x = canvasWidth * Math.random();
                //creates a Y
                circle.y = groundY * Math.random();
                //adds to background as child
                background.addChild(circle);
            }



            //creates moon and its variables
            var moon = draw.bitmap("img/moon.png");
            //makes the moon's position relative to the canvas
            moon.x = canvasWidth-250;
            //creates Y
            moon.y = 50;
            //makes x scale
            moon.scaleX = 0.5;
            //makes Y scale
            moon.scaleY = 0.5;
            //adds to the background as a chile
            background.addChild(moon);


             //creates floor and its variables
             floor = draw.bitmap("img/ground.png");
             //makes the floor's position relative to the canvas
             floor.x = canvasWidth-2000;
             //creates Y and sets it to the ground level
             floor.y = groundY;
             //makes x scale and sets it
             floor.scaleX = 2;
             //makes Y scale and sets it
             floor.scaleY = 2;
             //adds to the background as a chile
             background.addChild(floor);

               //creates floor and its variables
               floor2 = draw.bitmap("img/ground.png");
               //makes the floor's position relative to the canvas
               floor2.x = canvasWidth-4000;
               //creates Y and sets it
               floor2.y = groundY;
               //makes x scale and sets it
               floor2.scaleX = 2;
               //makes Y scale and sets it
               floor2.scaleY = 2;
               //adds to the background as a chile
               background.addChild(floor2);

    
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            
            //the possible colors
            var buildingColors = ["#a5a5a5", "#b8baba", "#a5a5a5", "#a5a5a5", "#b8baba"]

            //makes 5 buildings
            for (var i = 0; i < 5; i++) {
                //creates the building height
                var buildingHeight = 300 * Math.random();
                //creates the actual building
                var building = draw.rect(75, buildingHeight, buildingColors[i], "Black", 1);
                //makes the buildings 200 pixels away from each other
                building.x = 200 * i;
                //sets the buildings above the ground
                building.y = groundY - buildingHeight;
                //adds the building to the background as a child
                background.addChild(building);
                //pushes building to buildings array
                buildings.push(building);
              }
            
            // TODO 3: Part 1 - Add a tree
            //draws tree
            tree = draw.bitmap("img/MinecraftTree.png");

            //creates scale x and sets it
            tree.scaleX = 1.5
            //creates scale y and sets it
            tree.scaleY = 1.5
            //creates the X and sets it
            tree.x = canvasWidth-200;
            //creates tne Y and sets it
            tree.y = groundY-310;
            //adds to the background as a child
            background.addChild(tree);
            


              // TODO 3: Part 1 - Add a harambe
            //draws harambe
            harambe = draw.bitmap("img/harambe.png");

            //creates scale x and sets it
            harambe.scaleX = 0.55
            //creates scale y  and sets it
            harambe.scaleY = 0.55
            //creates the X and sets it
            harambe.x = canvasWidth-700;
            //creates tne Y and sets it
            harambe.y = groundY-410;
            //adds to the background as a child
            background.addChild(harambe);
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            
            //moves the tree left
            tree.x = tree.x - 3;

      
          
            if (tree.x < -300) {//detects when tree goes off the side
            tree.x = canvasWidth;  //sets tree to canvasWidth

            }
            //moves harambe off screen slowly
            harambe.x = harambe.x -0.9


            floor.x = floor.x - 3;

            if (floor.x < -4000) {
                floor.x = canvasWidth;
    
    
                }
    
    
                floor2.x = floor2.x - 3;
    
    
                //resets the tree when it goes off screen
                if (floor2.x < -4000) {
                floor2.x = canvasWidth;
    
    
                }
    
          


            

            
          


            

            
            // TODO 4: Part 2 - Parallax
            //runs code for all of the buildings
            for (var i = 0; i < buildings.length; i++) {
                //
                var building = buildings[i];
                //moves the buildings
                building.x = building.x - 1
              //detects when building goes off the edge
                if(building.x < -100){
                    //resets building x
                    building.x = canvasWidth;
                }
              }




        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
