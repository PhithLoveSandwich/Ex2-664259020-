const { Shape, Circle, Rectangle, Square } = require("./Ex4");

console.log("################################# EX4 ################################");
console.log("############################### Shape ###############################");

// Create Shape instances
const shape1 = new Shape("blue", false);
const shape2 = new Shape("green", true);

// Display the shapes
console.log(shape1.toString());
console.log(shape2.toString());

console.log("############################### Circle ##############################");

// Create Circle instances
const circle1 = new Circle(5, "yellow", true);
const circle2 = new Circle(10, "purple", false);

// Display the circles
console.log(circle1.toString());
console.log("Area of Circle1: " + circle1.getArea());
console.log("Perimeter of Circle1: " + circle1.getPerimeter());

console.log(circle2.toString());
console.log("Area of Circle2: " + circle2.getArea());
console.log("Perimeter of Circle2: " + circle2.getPerimeter());

console.log("############################ Rectangle ##############################");

// Create Rectangle instances
const rectangle1 = new Rectangle("red", true, 4, 6);
const rectangle2 = new Rectangle("orange", false, 2, 8);

// Display the rectangles
console.log(rectangle1.toString());
console.log("Area of Rectangle1: " + rectangle1.getArea());
console.log("Perimeter of Rectangle1: " + rectangle1.getPerimeter());

console.log(rectangle2.toString());
console.log("Area of Rectangle2: " + rectangle2.getArea());
console.log("Perimeter of Rectangle2: " + rectangle2.getPerimeter());

console.log("############################### Square ##############################");

// Create Square instances
const square1 = new Square("blue", true, 5);
const square2 = new Square("pink", false, 8);

// Display the squares
console.log(square1.toString());
console.log("Area of Square1: " + square1.getArea());
console.log("Perimeter of Square1: " + square1.getPerimeter());

console.log(square2.toString());
console.log("Area of Square2: " + square2.getArea());
console.log("Perimeter of Square2: " + square2.getPerimeter());

console.log("######################################################################");
 