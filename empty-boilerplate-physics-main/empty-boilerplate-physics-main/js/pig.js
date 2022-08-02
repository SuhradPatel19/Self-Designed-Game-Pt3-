class Pigs {
    constructor(x, y, w, h, angle) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.tint = 255
        this.image = loadImage("assets/enemy.png")
        // this.image2 = loadImage("assets/yellowbird.png")
        // this.image3 = loadImage("assets/bluebird.png")
        this.angle = angle

        var options = {
            isStatic: false,
            // restitution: 0.1,
            // friction: 1,
   
        }

        this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h, options)
        World.add(world, this.body)


    }

    display() {
        var pos = this.body.position
        var angle = this.body.angle
        //console.log(this.body.speed)

       

        if(this.body.speed<7){

           push()
           translate(pos.x, pos.y)
           rotate(angle)
           imageMode(CENTER)
           noStroke()
           image(this.image, 0, 0, this.w, this.h)
           pop()
            
        }

        else{
            World.remove(world,this.body)
            push()
            this.tint-=5
            tint(255,this.tint)
            image(this.image, pos.x, pos.y, this.w, this.h)
            pop()
        }
    }

    

    




}