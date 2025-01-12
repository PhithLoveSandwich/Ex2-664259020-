const {Author,Book} = require("./Ex1");
console.log("################################# EX1 ################################")
console.log("############################## Author #############################")
const Author1 = new Author ("Thanawat Srisaeng","664259020@webmail.npru.ac.th");
const Author2 = new Author ("Natsuda RongThong","664259006@webmail.npru.ac.th");
console.log(Author1.toString());
console.log(Author2.toString());
console.log("############################## Books ##############################")
const Book1 = new Book ("Make Somtum",[Author1,Author2],100,5);
console.log(Book1.toString());
console.log(Book1.getAuthorName());
console.log("#####################################################################")

const {Invoice,Customer} = require("./Ex2");
console.log("################################# EX2 ################################")
console.log("############################## Customer #############################")
const Customer1 = new Customer ("C001","Thanawat Srisaeng","5");
const Customer2 = new Customer ("C002","Natsuda RongThong","10");
console.log(Customer1.toString());
console.log(Customer2.toString());

const Invoice1 = new Invoice("INV001", Customer1, 1000);
const Invoice2 = new Invoice("INV002", Customer2, 1500);

const {Person,Student,Staff} = require("./Ex3");
console.log("################################# EX3 ################################")
console.log("############################### Person ###############################")
const Person1 = new Person ("Thanawat Srisaeng","Ratchaburi");
const Person2 = new Person ("Natsuda RongThong","Nakhon Pathom");
const Person3 = new Person ("Somchai NonDoe","Ratchaburi");
console.log(Person1.toString());
console.log(Person2.toString());
console.log(Person3.toString());
console.log("############################### Student ##############################")
const Student1 = new Student("Thanawat Srisaeng","Ratchaburi","SE","2566","14500")
const Student2 = new Student("Natsuda RongThong","Nakhon Pathom","SE","2566","14500")
console.log(Student1.toString());
console.log(Student2.toString())
console.log("################################ Staff ###############################")
const Staff1 = new Staff("Somchai NonDoe","Ratchaburi","Jhogbung NPRU","15000")
console.log(Staff1.toString())
console.log("######################################################################");

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
const { CustomerEX5, Visit, DiscountRate } = require("./Ex5");

console.log("################################# EX5 ################################");
console.log("############################### Customer #############################");

const customerEx51 = new CustomerEX5("Thanawat Srisaeng");
const customerEx52 = new CustomerEX5("Natsuda RongThong");

customerEx51.setMember(true);
customerEx51.setMemberType("Premium");

customerEx52.setMember(true);
customerEx52.setMemberType("Gold");

console.log(customerEx51.toString());
console.log(customerEx52.toString());


console.log("Service Discount Rate for Premium: " + DiscountRate.getServiceDiscountRate("Premium"));
console.log("Service Discount Rate for Gold: " + DiscountRate.getServiceDiscountRate("Gold"));
console.log("Service Discount Rate for Silver: " + DiscountRate.getServiceDiscountRate("Silver"));

const visit1 = new Visit(customerEx51, "2024-12-24");
visit1.setServiceExpense(200);
visit1.setProductExpense(150);

const visit2 = new Visit(customerEx52, "2024-12-25");
visit2.setServiceExpense(300);
visit2.setProductExpense(100);

console.log(visit1.toString());
console.log("Total Expense for Visit 1: " + visit1.getTotalExpense().toFixed(2));

console.log(visit2.toString());
console.log("Total Expense for Visit 2: " + visit2.getTotalExpense().toFixed(2));


