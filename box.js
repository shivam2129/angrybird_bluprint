class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.box = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.box);
  }
  display(){
    var pos =this.box.position;
    var angle = this.box.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    stroke("green");
    strokeWeight(4);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
