/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const BOARD_WIDTH=$("#board").width()
  const BOARD_HEIGHT=$("#board").height()
  const WALKER_WIDTH=$("#walker").width()
  const WALKER_HEIGHT=$("#walker").height()
  
  const KEY = {
    LEFT:37,
    UP:38,
    RIGHT:39,
    DOWN:40,

    A:65,
    W:87,
    D:68,
    S:83,

    C:67,
    ENTER:13,
    SPACE:32
  }
  // Game Item Objects
var walker = {
  positionX:0,
  positionY:0,
  speedX:0,
  speedY:0,
  width: WALKER_WIDTH,
  height: WALKER_HEIGHT
}

  var walker2 = {
    positionX: BOARD_WIDTH - 50,
    positionY:0,
    speedX:0,
    speedY:0,
    width: WALKER_WIDTH,
    height: WALKER_HEIGHT
}

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionBox();
    redrawBox();
    wallCollision();
    showResult(walkerCollide(walker,walker2));
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {

if(event.which === KEY.LEFT){
  walker.speedX = -5
}

if(event.which === KEY.UP){
  walker.speedY = -5
}

if(event.which === KEY.RIGHT){
  walker.speedX = 5
}

if(event.which === KEY.DOWN){
  walker.speedY = 5
}

if(event.which === KEY.A){
  walker2.speedX = -5
}

if(event.which === KEY.W){
  walker2.speedY = -5
}

if(event.which === KEY.D){
  walker2.speedX = 5
}

if(event.which === KEY.S){
  walker2.speedY = 5
}





console.log(event.which);
  }
  function handleKeyUp(event) {
    if(event.which === KEY.LEFT){
      walker.speedX = 0
    }
    
    if(event.which === KEY.UP){
      walker.speedY = 0
    }
    
    if(event.which === KEY.RIGHT){
      walker.speedX = 0
    }
    
    if(event.which === KEY.DOWN){
      walker.speedY = 0
    }
    
    if(event.which === KEY.A){
      walker2.speedX = 0;
    }
    
    if(event.which === KEY.W){
      walker2.speedY = 0;
    }
    
    if(event.which === KEY.D){
      walker2.speedX = 0;
    }
    
    if(event.which === KEY.S){
      walker2.speedY = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


function repositionBox(){
  walker.positionX += walker.speedX;
  walker.positionY += walker.speedY;

  walker2.positionX += walker2.speedX;
  walker2.positionY += walker2.speedY;
}

function redrawBox(){
  $("#walker").css("left", walker.positionX)
  $("#walker").css("top", walker.positionY)

  $("#walker2").css("left", walker2.positionX)
  $("#walker2").css("top", walker2.positionY)
}



function wallCollision(){
  if(walker.positionX > BOARD_WIDTH - WALKER_WIDTH||walker.positionX < 0){
    walker.positionX -= walker.speedX
  }
  if(walker.positionY > BOARD_HEIGHT- WALKER_HEIGHT||walker.positionY < 0){
    walker.positionY -= walker.speedY
  }
  if(walker2.positionX > BOARD_WIDTH - WALKER_WIDTH||walker2.positionX < 0){
    walker2.positionX -= walker2.speedX
  }
  if(walker2.positionY > BOARD_HEIGHT- WALKER_HEIGHT||walker2.positionY < 0){
    walker2.positionY -= walker2.speedY
  }

}

function walkerCollide(obj1,obj2){
  obj1.leftX = obj1.positionX;
  obj1.topY = obj1.positionY;
  obj1.rightX = obj1.positionX + obj1.width;
  obj1.bottomY = obj1.positionY + obj1.height;
  // TODO: Do the same for obj2
  obj2.leftX = obj2.positionX;
  obj2.topY = obj2.positionY;
  obj2.rightX = obj2.positionX + obj2.width;
  obj2.bottomY = obj2.positionY + obj2.height;

  if(
      obj2.rightX > obj1.leftX &&
      obj2.leftX < obj1.rightX &&
      obj2.bottomY > obj1.topY &&
      obj2.topY < obj1.bottomY 
    ){
      return true;
    }else {return false;}

}
  
function showResult(result) {
  if(result){$("h1").text('COLLISIONNN!!!');}else {$("h1").text('')}
}
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
