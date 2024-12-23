class Author {
    private name: String;
    private email: String;

    constructor(name:String,email:String){
        this.name = name;
        this.email = email;
    }

//Public Method

    public getName(): String{
        return this.name;
    }

    public getEmail(): String{
        return this.email;
    }
    public setEmail(email:String):void{
        this.email = email
    }

    public toString():string{
        return "Author[name: " + this.name + ",Email: " + this.email +"]" ;
    }

}

class Book{
    private name: String;
    private author:Author[];
    private price: Number;
    private qty: Number = 0;

    constructor(name:String,author:Author[],price:Number,qty:Number = 0){
        this.name = name;
        this.author = author;
        this.price = price;
        this.qty = qty;
    }

    //public method
    public getName():String{
        return this.name;
    }

    public getAuthor():Author[]{
        return this.author;
    }

    public getPrice():Number{
        return this.price;
    }

    public setPrice(price:Number):void{
        this.price = price;
    }
    
    public getQty():Number{
        return this.qty
    }

    public setQty(qty:Number):void{
        this.qty = qty;
    }

    public toString():String{
    let details = "Book [name = (" + this.name + "),authors ={Author";
    for (let i = 0 ; i < this.author.length;i++){
        details += this.author[i].toString() + ","
    }
    details += "}, price = " + this.price + ", qty = " + this.qty + "]"
    return details; 
    }

    public getAuthorName():String{
        let authorNames = "" ;
        for (let i = 0 ; i < this.author.length;i++){
            authorNames += this.author[i].getName() + ",";
    }
    return authorNames;
}
}
export = {Author,Book};


