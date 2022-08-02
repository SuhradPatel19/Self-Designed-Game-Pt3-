class Log {
    constructor(x, y, w, h,angle) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image = loadImage("assets/wood2.png")
        this.angle=angle

        var options = {
            isStatic: false,
            restitution:0.1,
            friction: 5,
        }

        this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h, options)
        World.add(world, this.body)


    }

    display() {
        var pos = this.body.position
        var angle = this.body.angle 
        Matter.Body.setAngle(this.body,this.angle)

        push()
        translate(pos.x, pos.y)
        rotate(this.angle)
        imageMode(CENTER)
        noStroke()
        fill("brown")
        image(this.image, 0, 0, this.w, this.h)

        pop()
    }





}