class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility = 255;
    //0 indicates 1 fully OFF byte (transaprency)
    //255 indicates 1 fully ON byte 
    //(255 is 11111111)
  }

  display(){
    //console.log("Pig_Speed:",this.body.speed);
    if(this.body.speed<3)
    {
      super.display();
    }
    else
    {
    World.remove(world,this.body);
    push()
    this.Visibility=this.Visibility-5;
    tint(255,this.Visibility);
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop()
    }
  }
};