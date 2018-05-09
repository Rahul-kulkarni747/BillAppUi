import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './addCategory.component';

const CategoryRoutes: Routes = [
    { path: '', component: AddCategoryComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(CategoryRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CategoryRoutingMoudle { }
