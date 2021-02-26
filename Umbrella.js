class Umbrella{
    constructor(x,y,r){
        var options={
            isStatic:false
        }
        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        this.boyImg=loadImage("images/Walking Frame/walking_1.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
       image(this.boyImg,187,600,200,200);

    }

}