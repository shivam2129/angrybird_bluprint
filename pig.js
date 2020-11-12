class Pig {
     constructor(x,y){
    
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
          }
         
          this.pig = Bodies.rectangle(x,y,40,40,options)
          this.width = 40
          this.height = 40

     
     World.add(world , this.pig)
        }

        display(){
            var pos =this.pig.position;
            var angle = this.pig.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            stroke("blue");
            strokeWeight(4);
            rectMode(CENTER);
            fill(255);
            rect(0, 0, this.width, this.height);
            pop();
          }

}