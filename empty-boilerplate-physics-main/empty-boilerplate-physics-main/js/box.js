class Box {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image = loadImage("assets/wood1.png")

        var options = {
            isStatic: false,
            restitution: 0.1,
            friction: 1,
        }

        this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h, options)
        World.add(world, this.body)


    }

    display() {
        var pos = this.body.position
        var angle = this.body.angle

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        noStroke()
        fill("brown")
        image(this.image, 0, 0, this.w, this.h)

        pop()
    }





}