const {Author,Book} = require("./Ex1");

console.log("############################## Author #############################")
const Author1 = new Author ("Thanawat Srisaeng","664259020@webmail.npru.ac.th");
const Author2 = new Author ("Natsuda RongThong","664259006@webmail.npru.ac.th");
console.log(Author1.toString());
console.log(Author2.toString());
console.log("############################## Books ##############################")
const Book1 = new Book ("Make Somtum",[Author1,Author2],100,5);
console.log(Book1.toString());
console.log(Book1.getAuthorName());
console.log("###################################################################")