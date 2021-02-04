class Ball{
    constructor(x,y,radius){
        var options={
            restitution: 0.8,friction: 2,density: 1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(myworld,this.body);
    }
    display(){
        var pos= this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("white");
        ellipse(0,0,this.radius);
        pop();
    }
}