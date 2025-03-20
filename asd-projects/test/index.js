//setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var FRAME_RATE = 60;
var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;


//handlers
$(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
$(document).on('keyup', handleKeyUp);


//variables




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
var colors = {
    darkPurple:"#0e0722"
    
}
var groundLvl = 270;
var player = playerBoxObject(10,10,50,50,colors.darkPurple)
var obsticles = [
    hydrantObject(),
    hydrantObject(),
    hydrantObject(),   
    hydrantObject(),
]






function startCanvas(){
   
    var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); 
    



}


function newFrame() {
    background("white")
    drawObsticles(obsticles);
    drawGround(groundLvl)





    
    player.speedY = 1;

    if(player.y > groundLvl){}


    drawPlayerBox();
  }














    

//helper functions 


function obsticleObject(x,y,width,height,color){
    return{
    
        x:x,
        y:y,
        width:width,
        height:height,
        rightX:x + width,
        leftX:x,
        topY:y,
        bottomY:y+height,
        color:color
    
    
    }
}


function drawObsticles(obj){
    
   for(var i =0; i <= obj.length-1;i++){
    fill(obj[i].color)
    stroke(obj[i].color)
    drawRectangle(obj[i].x,obj[i].y,obj[i].width,obj[i].height)
   }
        
    
    
}


function hydrantObject(){
    return(
    obsticleObject(-100,groundLvl-10,10,15,"red")
    )
}


function playerBoxObject(x,y,width,height,color){
return{

    x:x,
    y:y,
    width:width,
    height:height,
    rightX:x + width,
    leftX:x,
    topY:y,
    bottomY:y+height,
    color:color,
    speedY:0
    
    
    }
}

function drawPlayerBox(){
    fill(player.color)
    stroke(player.color)
    player.y += player.speedY;
    drawRectangle(player.x,player.y,player.width,player.height)
}

function drawGround(y){
    fill("grey")
    stroke("grey")
    drawRectangle(0,y,500,500 - y)

}

function handleKeyDown(event) {

if(event.which === KEY.LEFT){

}

if(event.which === KEY.UP){

}

if(event.which === KEY.RIGHT){

}

if(event.which === KEY.DOWN){

}

if(event.which === KEY.A){

}

if(event.which === KEY.W){

}

if(event.which === KEY.D){

}

if(event.which === KEY.S){
    
}





console.log(event.which);
    }
function handleKeyUp(event) {
    if(event.which === KEY.LEFT){

    }
    
    if(event.which === KEY.UP){

    }
    
    if(event.which === KEY.RIGHT){
    
    }
    
    if(event.which === KEY.DOWN){

    }
    
    if(event.which === KEY.A){

    }
    
    if(event.which === KEY.W){
    
    }
    
    if(event.which === KEY.D){
    
    }
    
    if(event.which === KEY.S){
        
    }
    
    
}
function background(color){
    fill(color);
    stroke(color);
    drawRectangle(0,0,1000,1000);
    
    }

function drawCircle(x, y, radius, lineWidth = 2) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);

    ctx.fill();
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    ctx.closePath();
}

function drawEllipse(x, y, radiusX, radiusY) {
    ctx.beginPath();
    ctx.ellipse(x, y, radiusX, radiusY, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    ctx.closePath();
}
function fill(color){
 
     ctx.fillStyle = color;

    
    
}
function stroke(color){
    ctx.strokeStyle = color;
}


function drawRectangle(x, y, width, height, lineWidth = 2) {

    ctx.fillRect(x, y, width, height);
    ctx.lineWidth = lineWidth;
    ctx.strokeRect(x, y, width, height);
}
if (canvas.getContext) {startCanvas();}


