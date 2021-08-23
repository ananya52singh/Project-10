var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["575c95fb-a206-4839-a39e-59ed568e96bd","71d7c043-f8ee-4a26-943f-7f1a343c73c2","98d43516-8653-4563-9608-f28d14072d6c"],"propsByKey":{"575c95fb-a206-4839-a39e-59ed568e96bd":{"name":"player_1","sourceUrl":"assets/api/v1/animation-library/gamelab/LLfev4GLhYHy2MafwjezPxMUwgyffblr/category_people/blue_dress_arm_behind.png","frameSize":{"x":122,"y":381},"frameCount":1,"looping":true,"frameDelay":2,"version":"LLfev4GLhYHy2MafwjezPxMUwgyffblr","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":122,"y":381},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LLfev4GLhYHy2MafwjezPxMUwgyffblr/category_people/blue_dress_arm_behind.png"},"71d7c043-f8ee-4a26-943f-7f1a343c73c2":{"name":"player_2","sourceUrl":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png","frameSize":{"x":136,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png"},"98d43516-8653-4563-9608-f28d14072d6c":{"name":"soccer_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var goal1=createSprite(200,30,150,20);
goal1.shapeColor="white";
goal1.velocityX=100;

var goal2=createSprite(200,370,150,20);
goal2.shapeColor="white";
goal2.velocityX=-100;

var player=createSprite(200,120,10,10);
player.shapeColor="blue";
player.setAnimation("player_1");
player.scale=0.3;
player.velocityY=-2;

var you=createSprite(200,290,10,10);
you.shapeColor="blue";
you.setAnimation("player_2");
you.scale=0.3;

var ball=createSprite(200,200,5,5);
ball.shapeColor="blue";
ball.setAnimation("soccer_1");
ball.scale=0.1;

var boundary1=createSprite(200,10,400,3);
boundary1.shapeColor="white";

var boundary2=createSprite(10,200,3,400);
boundary2.shapeColor="white";

var boundary3=createSprite(200,390,400,3);
boundary3.shapeColor="white";

var boundary4=createSprite(390,200,3,400);
boundary4.shapeColor="white";


Score;
var Score=0;
var compScore=0;
var playerScore=0;

function draw() {
 background("green") ;
 for(var i=0;i<400;i=i+20){
   line(i,200,i+10,200);
 
 textSize(18);
 fill("black");
 text(compScore,25,225);
 text(playerScore,25,185);
 
createEdgeSprites();
   
   goal1.bounceOff(boundary1);
   goal1.bounceOff(boundary2);
   goal1.bounceOff(boundary3);
   goal1.bounceOff(boundary4);
   
   
   goal2.bounceOff(boundary1);
   goal2.bounceOff(boundary2);
   goal2.bounceOff(boundary3);
   goal2.bounceOff(boundary4);
   
   ball.bounceOff(edges);
   ball.bounceOff(boundary1);
   ball.bounceOff(boundary2);
   ball.bounceOff(boundary3);
   ball.bounceOff(boundary4);
  
  
player.bounceOff(edges);
player.bounceOff(boundary1);
player.bounceOff(boundary2);
player.bounceOff(boundary3);
player.bounceOff(boundary4);
  
  you.bounceOff(edges);
you.bounceOff(boundary1);
you.bounceOff(boundary2);
you.bounceOff(boundary3);
you.bounceOff(boundary4);
  
if(player.isTouching(ball))
  {
ball.velocityX=5;
ball.velocityY=-5;
player.velocityX=2;
player.velocityY=0;

if(keyDown("RIGHT_ARROW")){
  you.velocityX=2;
  you.velocityY=0;
}
if(keyDown("LEFT_ARROW")){
you.velocityX=-2;
  you.velocityY=0;
}

if(player.isTouching(ball)){
  ball.velocityX=10;
  ball.velocityY=-10;
  player.velocityX=2;
}
  }
 
 }
 if(ball.isTouching(goal1))
 {
   compScore =  compScore+1;
 }

if(ball.isTouching(goal2))
 {
   playerScore= playerScore+1;
 }


if(playerScore==2)
{
  fill("black");
  textSize(25);
  text("Player Win!",170,180);
  ball.x=200;
  ball.y=200;
ball.velocityX=0;
 ball.velocityY=0;
  player.x=200;
 player.y=100;
 you.x=200;
 you.y=290;
 goal1.x=200;
 goal1.y=30;
 goal2.x=200;
 goal2.y=370;
 
}
 if(compScore==2)
{
  fill("black");
  textSize(25);
  text("You Win!",170,180);
  ball.x=200;
  ball.y=200;
ball.velocityX=0;
 ball.velocityY=0;
  player.x=200;
 player.y=100;
 you.x=200;
 you.y=290;
 goal1.x=200;
 goal1.y=30;
 goal2.x=200;
 goal2.y=370;
 
}
 
 drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
