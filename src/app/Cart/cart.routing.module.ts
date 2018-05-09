import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { ConfirmOrder } from './ConfirmOrder/confirmOrder.component';
import { DoNotShowSecondaryOnRefreshGuard } from './../RouteGuards/SecondaryRouteGuard';

const cartRoutes: Routes = [
  { path: '', 
   component: CartComponent,
   children: [
            { path: 'confirmOrder', component: ConfirmOrder, canActivate: [ DoNotShowSecondaryOnRefreshGuard ] }
   ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(cartRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CartRoutingModule { }
