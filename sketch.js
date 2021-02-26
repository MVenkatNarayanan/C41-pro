const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

 var engine,world;
 var maxDrops=100;
 var drops,boys;
 var drops=[];

function preload(){
    thunder1=loadImage("images/thunderbolt/1.png");
    thunder2=loadImage("images/thunderbolt/2.png");
    thunder3=loadImage("images/thunderbolt/3.png");
    thunder4=loadImage("images/thunderbolt/4.png");

}

function setup(){
    createCanvas(500,700);

    engine = Engine.create();
    world = engine.world;

    

  boy=new Umbrella(240,677,800,10);
  //drops=new Drops(100,250,20,20);

    if(frameCount%150===0){
    for(var i=0;i<maxDrops;i++){
       drops.push(new createDrops(random(0,400),random(0,400)));
     }
   }
}

function draw(){
  background(0);
  
  Engine.update(engine)
    
  
  boy.display();
 //drop.display();

 thunderBolt();
 
  
drawSprites();
textSize(30);
  fill("white");
  text(mouseX + "," + mouseY,30,30);
}   
function thunderBolt(){
  if(frameCount % 60 === 0) {
  var thunder= createSprite(202,7,10,10);
  thunder.scale=0.5;  
  thunder.lifetime =100;

  var rand= Math.round(random(1,4));
  switch(rand){
    case 1:thunder.addImage(thunder1);
      break;
      case 2:thunder.addImage(thunder2);
      break;
      case 3:thunder.addImage(thunder3);
      break;
      case 4:thunder.addImage(thunder4);
      break;
      default:break;
   }
   
  }
}