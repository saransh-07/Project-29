class Box{
    constructor(x,y,width,height){
var options = {
    isStatic:false,
    restitution:0.2,
    friction:1.3,
    density:1 
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world,this.body);

    }
    display(a){
        
        fill (a);
var pos = this.body.position;
rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height);

    }
}