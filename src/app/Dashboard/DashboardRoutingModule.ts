import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dashboardComponent } from './DashboardComponent';
import { ProductListResolver } from './productList.resolver';
import { ProductListComponent } from './productList.component';

const dashboardRoutes: Routes = [
  { 
    path: '', 
    component: dashboardComponent,
    children: [{
      path: ':id',
      component: ProductListComponent,
      resolve: {
            products: ProductListResolver
      }
    }]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ProductListResolver]
})
export class DashboardRoutingModule { }
