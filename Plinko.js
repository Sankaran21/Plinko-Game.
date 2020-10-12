class plinko {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body=Bodies.circle(x,y,this.r,options);
      this.r=this.radius;
      radius=10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      ellipseMode(pos.x, pos.y, this.r);
    }
  };