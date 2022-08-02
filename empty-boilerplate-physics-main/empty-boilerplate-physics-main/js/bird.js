class Bird {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image1 = loadImage("assets/redbird.png")
        this.image2 = loadImage("assets/yellowbird.png")
        this.image3 = loadImage("assets/bluebird.png")
        this.smokeimage = loadImage("assets/smoke.png")
        this.trejectory = []
        this.tint = 255

        var options = {
            isStatic: false,
            restitution: 0.1,
            friction: 1,
        }

        this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h, options)
        World.add(world, this.body)


    }

    displayRed() {
        var pos = this.body.position
        var angle = this.body.angle
        // Matter.Body.setAngle(this.body,this.angle)

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        noStroke()
        fill("brown")
        image(this.image1, 0, 0, this.w, this.h)

        pop()
    }

    displayYellow() {
        var pos = this.body.position
        var angle = this.body.angle
        // Matter.Body.setAngle(this.body,this.angle)

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        noStroke()
        fill("brown")
        image(this.image2, 0, 0, this.w, this.h)

        pop()
    }

    displayBlue() {
        var pos = this.body.position
        var angle = this.body.angle
        // Matter.Body.setAngle(this.body,this.angle)

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        noStroke()
        fill("brown")
        image(this.image3, 0, 0, this.w, this.h)

        pop()
    }

    display() {
        if(gameState === "launched"){
        var position = [this.body.position.x, this.body.position.y]
        this.trejectory.push(position)
        }

        for (var i = 0; i < this.trejectory.length; i += 1) {


            push()
            //this.tint = this.tint-0.2
            //tint(255, this.tint)
            image(this.smokeimage, this.trejectory[i][0], this.trejectory[i][1], 5, 5)
            pop()


        }



    }







}