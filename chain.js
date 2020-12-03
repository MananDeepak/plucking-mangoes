class Chain {
    constructor (bodyA,pointB){
    var options={
    bodyA:bodyA,    
    pointB:pointB,
    stiffness:0.004,
    length:0.1
    
    }
    this.bodyA=bodyA;
    this.pointB=pointB;
    this.chain=Constraint.create(options);
    World.add(world,this.chain);

}
attach(body){
    this.chain.bodyA=body;   
   }
   fly(){
    this.chain.bodyA = null;
}

display(){
    var pointA=this.chain.bodyA.position;
    var pointB=this.pointB;
    
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }