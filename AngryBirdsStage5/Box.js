class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    this.visiblity = 255;
  }
  display(){
    var pos = this.body.position;
    if(this.body.speed<3){
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.visiblity = this.visiblity - 5;
      tint(255,this.visiblity);
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop();
    }
  }
};
