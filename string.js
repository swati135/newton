class Sling{
    constructor(bodyA, bodyB, pointB){


        var options = {
            body1: bodyA,
            body2: bodyB,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        //this.sling1 = loadImage('sprites/sling1.png');
        //this.sling2 = loadImage('sprites/sling2.png');
        //this.sling3 = loadImage('sprites/sling3.png');
        this.bodyB = bodyB;
        this.bodyA = bodyA;
       
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        var pointA = this.sling.pointA.position;
        var pointB = this.sling.pointB.position;

        strokeWeight(2);

        var Anchor1X = pointA.x
        var Anchor1Y = pointA.y

        var Anchor2X = pointB.x + this.offsetX;
        var Anchor2Y = pointB.x + this.offsetX;

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
            
            pop();
        }
    }
    
