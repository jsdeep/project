class Fruit{
    constructor(x,y,r){
        var fruitOptions={
            density:0.001   , 
            restitution:0.95,
         frictionAir:0.01         
        }
        this.body=Bodies.circle(x,y,r,fruitOptions);

        this.r=15;
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        push();
        ellipse(RADIUS);
        fill("blue");
        ellipse(pos.x,pos.y,this.r,this.r);
    pop();
    }
}