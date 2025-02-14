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
  var walker = Walker("#walker",0,0,0, 0,WALKER_WIDTH,WALKER_HEIGHT)
  var walker2 = Walker("#walker2",BOARD_WIDTH - 50,0,0, 0,WALKER_WIDTH,WALKER_HEIGHT)



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
    repositionBox(walker);
    repositionBox(walker2);
    redrawBox(walker);
    redrawBox(walker2);
    wallCollision(walker);
    wallCollision(walker2);
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

function Walker(id,posX,posY,speedX,speedY,width,height){
  return{
    id:id,
    positionX: posX,
    positionY:posY,
    speedX:speedX,
    speedY:speedY,
    width: width,
    height: height
  }
}

function repositionBox(obj){
  obj.positionX += obj.speedX;
  obj.positionY += obj.speedY;
}

function redrawBox(obj){
  $(obj.id).css("left", obj.positionX)
  $(obj.id).css("top", obj.positionY)
}



function wallCollision(obj){
  if(obj.positionX > BOARD_WIDTH - WALKER_WIDTH||obj.positionX < 0){
    obj.positionX -= obj.speedX
  }
  if(obj.positionY > BOARD_HEIGHT- WALKER_HEIGHT||obj.positionY < 0){
    obj.positionY -= obj.speedY
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
