class Thread{
  constructor(bodyA,pointB){
    var options = {
      bodyA : bodyA,
      pointB : pointB,
      lenght:200,
      stiffness:0.04
    }
    this.pointB = pointB
    this.rope = Constraint.create(options)
    World.add(world,this.rope)
}

display(){
    var pointA = this.rope.bodyA.position
    var pointB = this.pointB

    push()
    stroke("red")
    strokeWeight(3)
    line(pointA.x,pointA.y,pointB.x,pointB.y)



    pop()

    
  }
}