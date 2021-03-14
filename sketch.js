const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var maxDrops = 100;



var drops = [];

function preload(){

    
}

function setup(){
    createCanvas(500,850);

    engine = Engine.create();
    world = engine.world;  

   

if(frameCount % 100 === 0){
    for(var i = 0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400),random(0,400)))
        
    }  
}

}

function draw(){
    Engine.update(engine);
    
    background("black");
    



for(var i = 0; i<maxDrops; i++){
    drops[i].showDrop();
    drops[i].update();
}
    
   



    drawSprites();
}   

