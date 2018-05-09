import { Component, OnInit  } from '@angular/core';
import { Category } from './Category';
import { CategoryService } from './addCategory.service';


@Component({
  templateUrl: './addCategory.html',
  styleUrls: ['./addCategory.css'],
  providers:[ CategoryService ]
})

export class AddCategoryComponent{
    
    category = new Category();
    
    constructor(private categoryService:CategoryService) {

    }
    
    saveCategory(){
        this.categoryService.saveCategory(this.category);
    }
}
