class Ball{
    constructor(x,y,radius)
    {
        var options={
            isStatic:true,
           restitution :0.1,
           friction:0.1,
           density:1.0
        }
        this.body=Bodies.circle(x,y,radius)
        
       this.radius=radius
        World.add(world,this.body) 
    }
    display(){
        var pos=this.body.position
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius,this.radius)
    }
}