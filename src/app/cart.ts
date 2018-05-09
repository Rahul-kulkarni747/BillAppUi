import {Product} from './Settings/Product';

export class Cart {
    public tableNo: number;
    public bill: number = 0;
    public products= new Array<Product>();
    public quantity: number = 0;
       
    addProduct(product:Product){
        this.products.push(product);
        this.calculateBill();
        this.calculateQuantity();
    }
    
    calculateBill(){
        this.bill = 0;
        for(let i= 0; i<this.products.length; i++)
            this.bill += this.products[i].total;
    }
    
    calculateQuantity(){
        this.quantity = this.products.length;
    }
}
