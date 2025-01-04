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

// แสดงข้อมูล Invoice
console.log("############################## Invoice #############################");
console.log(Invoice1.toString()); 
console.log("Customer Name(s): " + Invoice1.getCustomerName()); 
console.log("Amount after Discount: " + Invoice1.getAmountAfterDiscount()); 

console.log(Invoice2.toString()); 
console.log("Customer Name(s): " + Invoice2.getCustomerName()); 
console.log("Amount after Discount: " + Invoice2.getAmountAfterDiscount()); 

console.log("#####################################################################");