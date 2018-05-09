import { Component, OnInit  } from '@angular/core';
import { Router,RouterStateSnapshot } from '@angular/router';
import { Product } from './../Settings/Product';
import { DataSource } from '@angular/cdk/collections';
import { GlobalVariable, Globals } from '../globalVariables';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { Dialog } from '../Dialog/dialog.component';
import { SnackBar } from '../SnackBar/snackbar.component';
import { UrlTree } from "@angular/router";


@Component({
    templateUrl: './cart.template.html',
    styleUrls: ['./cart.component.css'],
    providers: []
})

export class CartComponent implements OnInit {
    displayedColumns = ['name', 'price', 'quantity','tax','total','action'];
    dataSource = new MatTableDataSource<Product>(this.globals.cart.products);
    snapshot:RouterStateSnapshot;
    x:number = 1;
    
    constructor(private globals: Globals, private dialog: MatDialog, private snackBar: MatSnackBar, private router:Router) {
        this.snapshot = router.routerState.snapshot;
    }
    
    ngOnInit() {
        
    }

   /* @HostListener('window:popstate', ['$event'])
      onPopState(event) {
        console.log(event);
          console.log(this._location)
        if(this.x++ == 1)
            this._location.back();
      }*/
    
    decreaseQuantity(ele){
        if(ele.quantity > 1)
            ele.quantity--;
        ele.calculateTotal();
        this.globals.cart.calculateBill();
    }
    
    increaseQuantity(ele){
        ele.quantity++;
        ele.calculateTotal();
        this.globals.cart.calculateBill();
    }
    
    clearCart(){
        let dialogRef = this.dialog.open(Dialog, {
          data: { upperText : "Confirm?", description: "Are you sure you want to clear the cart?", yes:true, no: true }
        });
        
        dialogRef.afterClosed().subscribe(result => {
          if(result.toLowerCase() == 'yes'){
               
                this.globals.cart.products = [];
                this.globals.cart.calculateBill();
                this.globals.cart.calculateQuantity();
                this.dataSource = new MatTableDataSource<Product>(this.globals.cart.products);
                  
                let snackBarRef = this.snackBar.openFromComponent(SnackBar,{
                    data:'Cart Cleared',
                    duration: 500
                });
          }
         
        });
        
    }
    
    deleteElement(ele){
        
        let dialogRef = this.dialog.open(Dialog, {
          data: { upperText : "Confirm?", description: "Are you sure you want to delete from the cart?", yes:true, no: true }
        });
        
        dialogRef.afterClosed().subscribe(result => {
          if(result.toLowerCase() == 'yes'){
                let index=-1;
                for(var i = 0, len = this.globals.cart.products.length; i < len; i++) {
                    if (this.globals.cart.products[i].name === ele.name) {
                        index = i;
                        break;
                    }
                }
                this.globals.cart.products.splice(index,1);
                this.globals.cart.calculateBill();
                this.globals.cart.calculateQuantity();
                this.dataSource = new MatTableDataSource<Product>(this.globals.cart.products);
                  
                let snackBarRef = this.snackBar.openFromComponent(SnackBar,{
                    data:'Deleted from Cart',
                    duration: 500
                });
          }
         
        });
        
    }
    
    placeOrder(templateRef){
        let dialogRef = this.dialog.open(templateRef, {
        });
        
        dialogRef.afterClosed().subscribe(result =>{
        })
    }
}
