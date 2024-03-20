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
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            
            // TODO 3: Part 1 - Add a tree
            //draws tree
            tree = draw.bitmap("img/tree.png");
            //creates the X
            tree.x = canvasWidth-200;
            //creates tne Y
            tree.y = groundY-225;
            //adds to the background as a child
            background.addChild(tree);
            
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

            //resets the tree when it goes off screen
            if (tree.x < -300) {
            tree.x = canvasWidth;
}
            
            // TODO 4: Part 2 - Parallax
            

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
