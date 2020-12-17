

class Quadrilateral{
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }
    superCall(){
        return "print stauts name: " + this.length
    }
    area(){
        return (this.length + this.breadth)
    }
}

class sqauare extends Quadrilateral{
    constructor(length,breadth,name){
        super(length,breadth)
        this.name = name;
    }
    side(){
        return (this.length + this.breadth);
    }
    status(){
        return super.superCall();
    }   
}

class Rhombus extends Quadrilateral{
    constructor(length,breadth,name){
        super(length,breadth);
        this.name = name
    }
    sideRhombus(){
        return Math.floor((1/2)*(this.length * this.breadth)); //area of rhombus
        // perimeter of rhombus => 2 * Math.sqrt(Math.sqrt(d1,2) + Math.sqrt(d2,2))
    }
}


class Parallelogram extends Quadrilateral{
    constructor(length,breadth,name){
        super(length,breadth);
        this.name = name
    }
    sideParagram(){
        return 2*(this.length  + this.breadth); 
    }
}


class Trapazoid extends Quadrilateral{
    constructor(length,breadth,name,height){
        super(length,breadth);
        this.name = name
        this.height = height;
    }
    sideTrap(){
        return (super.area()/2) * this.height
    }
}




// instance classes
var square = new sqauare(3,2,"square");
// square.side
console.log(square)
console.log(square.side())
console.log(square.status())

var rhombus = new Rhombus(3,2,"rhombus");
// rhombus.sideRhombus();
// console.log(rhombus.sideRhombus())
console.log(rhombus.sideRhombus())

var para = new Parallelogram(3,2,"paralleogram");
console.log(para.sideParagram())

var Trapezod = new Trapazoid(3,2,"paralleogram",5);
console.log(Trapezod.sideTrap())










// class sqauare extends Quadrilateral(){
    
// }
// class sqauare extends Quadrilateral(){
    
// }
// class sqauare extends Quadrilateral(){
    
// }
// class sqauare extends Quadrilateral(){
    
// }




// var square = new Quadrilateral(3);
// var rectangle = new Quadrilateral(3);
// var Rhombus = new Quadrilateral(3);
// var Parallelogram = new Quadrilateral(3);
// var Trapezoid = new Quadrilateral(3);

// Create a class named quadrilateral, which will take basically take into account on the types of quadrilaterals. 
// After that, create a multiple classes for the following things which
// extends the quadrilateral class and describes why it is different from the parent class.

//  You must be able to create an instance of each
// of the following classes as well as be able to calculate the area and the perimeter of the same.

// Sqaure
// Rectangle
// Rhombus
// Parallelogram
// Trapezoid