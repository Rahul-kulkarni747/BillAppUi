export class Product {
    public name: string;
    public price: number;
    public tax: number;
    public desc: string;
    public image: any;
    public quantity: number;
    public error: boolean = false;
    public total: number;
    public category: number;

    constructor(name,price,tax,image,category,quantity){
        this.name= name;
        this.price= price;
        this.tax= tax;
        this.image= image;
        this.quantity = quantity;
    }
    
    
    calculateTotal(){
        this.total = this.quantity*this.price+(this.price*(this.tax/100));
    }
}
