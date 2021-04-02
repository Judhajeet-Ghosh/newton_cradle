class Bob{
    constructor(x,y,color){
      var  options = {
            restitution: 0.9,
            friction: 0.8,
            density: 0.8,
            frictionAir: 0,
            slop: 2,
            inertia: Infinity
        }

        this.body = Bodies.rectangle(x,y,40,40,options)
        this.x = x;
        this.y = y;
        this.color = color;
        World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
      
        fill(0);
        strokeWeight(5)
        stroke("lightblue")
        ellipse(0,0,60,60)
        pop()
    }
}

