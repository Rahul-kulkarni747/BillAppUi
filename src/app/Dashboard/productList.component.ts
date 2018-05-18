import { Component, OnInit, HostBinding, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Product } from './../Settings/Product';
import { GlobalVariable, Globals } from '../globalVariables';
import { DashboardService } from './productFetch.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Dialog } from '../Dialog/dialog.component';
import { SnackBar } from '../SnackBar/snackbar.component'

@Component({
    templateUrl: './ProductList.html',
    styleUrls: ['./ProductBill.css']
})


export class ProductListComponent implements OnInit {
  
    products: Product[];
    
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private globals: Globals,
        public dashboardService: DashboardService,
        public dialog: MatDialog,
        public snackBar: MatSnackBar
    ) {}
    
    ngOnInit() {
        this.route.data
          .subscribe((data: { products: any }) => {
            this.products = data.products;
          });
    }
        
    addToCart(prod) {
        let product = new Product(prod.name, prod.price, prod.tax, '', prod.category,prod.quantity);
        const productHelper= this.checkProductIsPresent(product); 
        
        if(productHelper.isPresent){
                this.openDialog(productHelper,product);
        }
        else if(typeof product.quantity === 'undefined' || product.quantity == null || product.quantity<1 ){
            prod.error=true;
        }
        else{
            product.calculateTotal();
            this.globals.cart.addProduct(product);
            let snackBarRef = this.snackBar.openFromComponent(SnackBar,{
                data:'Added To Cart',
                duration: 500
            });
        }
    }
    
    checkProductIsPresent(product):ProductHelper{
        let productHelper = new ProductHelper();
        for(var i=0;i<this.globals.cart.products.length;i++)
            if(this.globals.cart.products[i].name == product.name){
                productHelper.isPresent=true;
                /*productHelper.index=i;
                productHelper.currentTotal=this.globals.cart.products[i].total;*/
            }
        return productHelper;
    }
    
    openDialog(productHelper,product): void {
        let dialogRef = this.dialog.open(Dialog, {
          data: { product:product, helper:productHelper, upperText : "Product already exists", description: "Product is already present in your cart, go to cart to change quantity.", yes:true, no: false }
        });
    }
        
    quantityTouched(product){
        product.error=false;
    }
    
    lengthCheck(product){
        let returnType:boolean = false;
        if(product.length == 0)
            returnType=true;
        return returnType;
    }
}
    
export class ProductHelper{
    index: number;
    isPresent: boolean= false;
    currentTotal: number;
}

