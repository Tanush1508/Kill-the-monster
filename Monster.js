class Monster {
  constructor(x,y,r)
	{
		var options = {
			isStatic:false, 
      density: 5, 
      frictionAir: 0
    };
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("monster1.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{		
			push()
			translate(this.body.position.x,this.body.position.y);
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			pop()
			
	}
}
