// Define a class called AreaCalculator. 
// Inside it, create a static method that let you calculate the area of the geometric figure passed as parameter. 
// The method will let you calculate the square, the rectangle and the circle area.



class Square {
constructor(side) {
this.side = side;
}
}

class Rectangle {
constructor(width, height) {
this.width = width;
this.height = height;
}
}

class Circle {
constructor(radius) {
this.radius = radius;
}
}

class AreaCalculator {
        static calculate(shape) {
            
            let result = 0;
            if (shape instanceof Square) {
                result = shape.side*shape.side;
            } else if(shape instanceof Circle){
                result = Math.PI*(shape.radius*shape.radius);
            } else if(shape instanceof Rectangle){
                result = shape.width*shape.height;
            }
           
            return result; 
        }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));