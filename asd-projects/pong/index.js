/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const BOARD_WIDTH=$("#board").width()
  const BOARD_HEIGHT=$("#board").height()
  const KEY = {
   
    UP:38,
    DOWN:40,
    W:87, 
    S:83,
    ENTER:13,
    SPACE:32,
    ESC:27
  }


  // Game Item Objects

  var leftPaddle = makeGameItem("#leftPaddle",50,(BOARD_HEIGHT/2) - ($("#rightPaddle").height() / 2),0,0)
  var rightPaddle = makeGameItem("#rightPaddle",BOARD_WIDTH- $("#rightPaddle").width()- 50,(BOARD_HEIGHT/2) - ($("#rightPaddle").height() / 2),0,0)
  var leftScore = makeTextObj("#leftScore")
  var rightScore = makeTextObj("#rightScore")
  var ball = makeGameItem("#ball",(BOARD_HEIGHT/2) - ($("#ball").width() / 2),(BOARD_HEIGHT/2) - ($("#ball").height() / 2),0,0)
  var gameMode = "2P"
  var winScore = 7;

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);                        // change 'eventType' to the type of event you want to handle
  $("#restartButton").on("click", restartButton);
  $("#AIButton").on("click", AIButton);
  $("#playerButton").on("click", playerButton);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {

  handleGameModes()
  PaddleLogic(leftPaddle);
  PaddleLogic(rightPaddle);
  ballLogic(ball,rightPaddle,leftPaddle);

  winScreen();
  console.log(ball.speedX)



  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event){


 
  if(gameMode === "2P"){
    if(event.which === KEY.UP){
      rightPaddle.speedY = -5;
    }
    
  
    
    if(event.which === KEY.DOWN){
      rightPaddle.speedY = 5;
    }
  }
    
  
    
    
    if(event.which === KEY.W){
      leftPaddle.speedY = -5;
    }
    if(event.which === KEY.S){
      leftPaddle.speedY = 5;
    }
 
    if(event.which === KEY.SPACE){
      startGame();
    }
    if(event.which === KEY.ESC){
      endGame();
    }
  }

  function handleKeyUp(event){


    if(gameMode === "2P"){
      if(event.which === KEY.UP){
        rightPaddle.speedY = 0;
      }
      
    
      
      if(event.which === KEY.DOWN){
        rightPaddle.speedY = 0;
      }
  }
    if(event.which === KEY.W){
      leftPaddle.speedY = 0;
    }
    
  
    
    if(event.which === KEY.S){
      leftPaddle.speedY = 0;
  
    }
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function AIButton(){
  gameMode = "AI";
  rightPaddle.speedY = 0;
}
function playerButton(){
  gameMode = "2P";
  rightPaddle.speedY = 0;
}

function handleGameModes(){

 if(gameMode ==="2P"){
  $("#playerButton").css("background","linear-gradient(135deg, #957fd0, #8e66be)");
     $("#AIButton").css("background","linear-gradient(135deg, #0e0722, #100919)");
    
 } else if (gameMode === "AI"){
  $("#AIButton").css("background","linear-gradient(135deg, #957fd0, #8e66be)");
  $("#playerButton").css("background","linear-gradient(135deg, #0e0722, #100919)");
 }
  
  if(gameMode === "AI"){
    if(ball.x > (BOARD_WIDTH/2)){
      if(ball.y < rightPaddle.topY ){rightPaddle.speedY = -5;}
      if(ball.y > rightPaddle.bottomY){rightPaddle.speedY = 5;}
      if(ball.y> rightPaddle.topY && ball.y < rightPaddle.bottomY){rightPaddle.speedY = 0;}
      
        
      
    }else {rightPaddle.speedY = 0;}
  }

}







function startGame(){
ball.x = 250;
ball.y = 250;
ball.speedX = 5;
ball.speedY = 1;

}
function makeGameItem(id,x,y,speedX,speedY){
  return{
    x:x,
    y:y,
    width:$(id).width(),
    height:$(id).height(),
    speedX:speedX,
    speedY:speedY,
    id:$(id)

  };
}

function makeTextObj(id){
  return{
    x:parseFloat($(id).css("left")),
    y:parseFloat($(id).css("top")),
    width:$(id).width(),
    height:$(id).height(),
    id:$(id),
    text:0
  };
}
function moveGameItem(gameItem){
  gameItem.x += gameItem.speedX;
  gameItem.y += gameItem.speedY;
  
}
function drawGameItem(gameItem){
  gameItem.id.css("left",gameItem.x);
  gameItem.id.css("top",gameItem.y);
}
function makeHitbox(gameItem){
  gameItem.leftX = gameItem.x;
  gameItem.topY = gameItem.y;
  gameItem.rightX = gameItem.x + gameItem.width;
  gameItem.bottomY = gameItem.y + gameItem.height;
}
function wallCollisionDetect(gameItem){
  makeHitbox(gameItem);
  if(gameItem.topY < 0){
    return("top");
  }
  if(gameItem.bottomY > BOARD_HEIGHT){
    return("bottom");
  }
  if(gameItem.leftX < 0){
    return("left");
  }
 
  if(gameItem.rightX > BOARD_WIDTH){
    return("right");
  }
}

function PaddleLogic(gameItem){
  moveGameItem(gameItem);
  drawGameItem(gameItem);
if(wallCollisionDetect(gameItem) === "top"){
  gameItem.y -= gameItem.speedY - 1; 
}
if(wallCollisionDetect(gameItem) === "bottom"){
  gameItem.y -= gameItem.speedY + 1; 
}
}
function paddleCollisionDetection(paddle, ball) {
  makeHitbox(paddle);
  makeHitbox(ball);

  if (
      ball.rightX > paddle.leftX &&
      ball.leftX < paddle.rightX &&
      ball.bottomY > paddle.topY &&
      ball.topY < paddle.bottomY
  ) {
      // Calculate how far from the paddle center the ball hit
      let relativeIntersectY = (ball.y + ball.height / 2) - (paddle.y + paddle.height / 2);
      let normalizedIntersectY = relativeIntersectY / (paddle.height / 2);

      // Adjust ball angle based on where it hit the paddle
      let bounceAngle = normalizedIntersectY * (Math.PI / 4); // Max bounce angle = 45 degrees
      
      let speed = Math.sqrt(ball.speedX ** 2 + ball.speedY ** 2); // Keep speed constant

      // Reverse X direction, apply bounce angle to Y
      ball.speedX = (-Math.sign(ball.speedX) * Math.cos(bounceAngle) * speed) * 1.05;
      ball.speedY = (Math.sin(bounceAngle) * speed) * 1.05 ;

      // Ensure ball does not clip inside paddle
      if (ball.speedX > 0) {
          ball.x = paddle.rightX + 1;
      } else {
          ball.x = paddle.leftX - ball.width - 1;
      }
  }
}
function ballLogic(ball,paddle1,paddle2){
  paddleCollisionDetection(paddle1,ball);
  paddleCollisionDetection(paddle2,ball);
  if(wallCollisionDetect(ball) === "bottom"){
    ball.speedY = -ball.speedY;
  }
  if(wallCollisionDetect(ball) === "top"){
    ball.speedY = -ball.speedY;
  }
  if(wallCollisionDetect(ball) === "left"){
score(rightScore);
  }
  if(wallCollisionDetect(ball) === "right"){
    score(leftScore);
  }
  moveGameItem(ball);
  drawGameItem(ball);
}
function score(score){
  score.text += 1;
  score.id.text(score.text)
  startGame()
}
function winDetection(){

if(leftScore.text >= winScore){
  return("left");
}
if(rightScore.text >= winScore)
  {return("right");
  }

}
function winScreen(){
  if(winDetection() === "left"){
    $("#winText").text("Left Won");
    $("#board").hide();
    $("#winBoard").show();
    $("#instructions").hide;
    stopGame();
  }
  if(winDetection() === "right"){
    $("#winText").text("Right Won");  
    $("#board").hide();
    $("#winBoard").show();
    $("#instructions").hide;
    stopGame();
  }
}
function restartButton(){
  console.log("game reset, scores - left: " + leftScore.text + " right: " + rightScore.text);
  $("#list").append($("<li>", { text: "left: " + leftScore.text + " right: " + rightScore.text }));
  ball.x = 250;
  ball.y = 250;
  leftScore.text = 0;
  rightScore.text = 0;
  leftScore.id.text("0");
  rightScore.id.text("0");
  $("#winBoard").hide();
  $("#board").show();
  $("#instructions").show;
}

function stopGame(){
ball.speedX = 0;
ball.speedY = 0;

}
  function endGame() {
    // stop the interval timer
   clearInterval(interval);
    // turn off event handlers
   $(document).off();
  }
}
