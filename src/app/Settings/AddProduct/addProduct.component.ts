import { Component, OnInit  } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from './addProduct.service';
import { Category } from '../AddCategory/Category';
import { ResponseBody } from '../../response';


@Component({
  templateUrl: './addProduct.html',
  styleUrls: ['./addProduct.css'],
  providers:[ ProductService ]
})

export class AddProductComponent implements OnInit{
    newProduct= new Product(undefined,undefined,undefined,undefined,undefined,undefined);
    title:string;
    path:any;
    imageUploaded:boolean;
    categories: Category[];
    fileSizeError:boolean = false;
    
    constructor(private productService:ProductService) {

    }
    
    ngOnInit() {
        this.imageUploaded=false;
        this.title = 'Add Product';
        this.productService.fetchCategory().subscribe(resp=> this.categories=resp.body.payload);
    } 
    
    saveProduct(){
        this.productService.saveProduct(this.newProduct);
    }
    
    onChange(event) {
        var files = event.srcElement.files;
        
        if(files[0].size<40000){
            var reader = new FileReader();
            reader.onload = (e)=> {
                this.path=reader.result;
                reader.onload =this._handleReaderLoaded.bind(this);
                reader.readAsBinaryString(files[0]);
             }
            this.imageUploaded=true;
            reader.readAsDataURL(event.target.files[0]);
        }
        else {
            this.fileSizeError=true;
        }
    
    }
    
     _handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;
        this.newProduct.image= btoa(binaryString);
    }
}
