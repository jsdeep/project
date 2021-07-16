class Ground{
    constructor(x,y,w,h){
        var groundOptions={
            isStatic:true
            
        }
        this.body=Bodies.rectangle(x,y,w,h,groundOptions);

        this.w=w;
        this.h=h;
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("blue");
        rect(pos.x,pos.y,this.w,this.h);
    pop();
    }
}