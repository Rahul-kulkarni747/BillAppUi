import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingMoudle } from './ProductRoutingModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatGridListModule, MatButtonModule, MatSelectModule, MatTabsModule, MatSnackBarModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { DragDropDirectiveModule } from 'angular4-drag-drop';
import { NgInit } from '../Directives/ngInit';
import { AddProductComponent } from './AddProduct/addProduct.component';
import { AddCategoryComponent } from './AddCategory/addCategory.component';

@NgModule({
  declarations: [
    SettingsComponent,
    NgInit,
    AddProductComponent,
    AddCategoryComponent
  ],
  imports: [
      CommonModule,
      SettingsRoutingMoudle,
      MatInputModule,
      MatGridListModule,
      MatButtonModule,
      FormsModule,
      ReactiveFormsModule,
      DragDropDirectiveModule,
      MatTabsModule,
      MatSelectModule,
      MatSnackBarModule
  ],
  providers: []
})

export class SettingsModule {}
