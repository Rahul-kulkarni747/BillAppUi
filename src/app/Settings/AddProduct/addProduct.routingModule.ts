import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './addProduct.component';

const ProductRoutes: Routes = [
    { path: '', component: AddProductComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ProductRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ProductRoutingMoudle { }
