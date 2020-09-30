  var ball,img,paddle,paddleimg,rand;

function preload() {
 
    img=loadImage("ball.png");
  
    paddleimg=loadImage("paddle.png");
  
}

function setup() {
    createCanvas(400, 400);
    paddle=createSprite(350,200,10,10);
  
    paddle.addImage("paddleimg",paddleimg);
  
    ball=createSprite(50,200,10,10);
  
    ball.addImage("img",img);
  
    ball.velocityX=-9;

}

function draw() {
      background(205,153,0);
  
      edges=createEdgeSprites();
  
      ball.bounceOff(edges[0]); 
  
      ball.bounceOff(edges[2]);
  
      ball.bounceOff(edges[3]);
  
      ball.bounceOff(paddle);
  
  randomVelocity();

 if(keyDown(UP_ARROW))
  {
    paddle.velocityY=-4; 
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.velocityY=4; 
  }
  
  drawSprites();
  
}

function randomVelocity()
{
  
  //rand=ball.velocityX(1,10);
}

