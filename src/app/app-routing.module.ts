import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './Dashboard/DashboardModule';
import { SettingsModule } from './Settings/settings.module';
import { CartModule } from './Cart/cart.module';
import { PageNotFoundComponent } from './not-found.component';
import { LoginComponent } from './Login/login.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'buyProduct' },
  { path: 'buyProduct', loadChildren: 'app/Dashboard/DashboardModule#DashboardModule', data: { state: 'buyProduct' }},
  { path: 'settings', loadChildren: 'app/Settings/settings.module#SettingsModule', data: { state: 'settings' } },
  { path: 'cart', loadChildren: 'app/Cart/cart.module#CartModule', data: { state: 'cart' } },
  { path: 'login', component: LoginComponent, outlet: 'loginPopUp' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        useHash: true
      }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
