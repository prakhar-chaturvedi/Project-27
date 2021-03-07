class String {
    constructor ( bodyA, bodyB, offsetX, offsetY ){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
       var options = {
           bodyA : bodyA,
           bodyB : bodyB,
           pointB : {x : this.offsetX , y : this.offsetY} 
       
       } 
       
       this.string = Matter.Constraint.create(options);
       World.add(world,this.string)
    }
       
       display(){
       var pointA = this.string.bodyA.position;
       var pointB = this.string.bodyB.position;
       push();
       strokeWeight(2);

       var Anchor1X = pointA.x
       var Anchor1Y = pointA.y

       var Anchor2X = pointB.x + this.offsetX;
       var Anchor2Y = pointB.y + this.offsetY; 

       line(Anchor1X , Anchor1Y , Anchor2X , Anchor2Y);
       pop();
       }
   
   
   }