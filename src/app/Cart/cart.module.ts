import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart.routing.module';
import {  MatInputModule, MatButtonModule,MatTableModule, MatTooltipModule, MatStepperModule } from '@angular/material';
import { CartComponent } from './cart.component';
import { ConfirmOrder } from './ConfirmOrder/confirmOrder.component';
import { DoNotShowSecondaryOnRefreshGuard } from './../RouteGuards/SecondaryRouteGuard';

@NgModule({
  declarations: [
    CartComponent,
    ConfirmOrder
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatTableModule,
    MatTooltipModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    DoNotShowSecondaryOnRefreshGuard
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})

export class CartModule {}
