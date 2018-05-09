import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { AddProductComponent } from './AddProduct/addProduct.component';
import { AddCategoryComponent } from './AddCategory/addCategory.component';

const SettingsRoutes: Routes = [
    {
        path: '',
        component: SettingsComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'addProduct' },
            { path: 'addProduct', component: AddProductComponent },
            { path: 'addCategory', component: AddCategoryComponent }
        ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(SettingsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class SettingsRoutingMoudle { }
