import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmOrder } from './confirmOrder.component';

const CartRoutes: Routes = [
    { path: '', component: ConfirmOrder }
];

@NgModule({
  imports: [
    RouterModule.forChild(CartRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ProductRoutingMoudle { }
