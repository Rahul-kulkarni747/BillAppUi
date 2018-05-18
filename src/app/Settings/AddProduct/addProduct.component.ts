import { Component, OnInit  } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from './addProduct.service';
import { Category } from '../AddCategory/Category';
import { ResponseBody } from '../../response';
import { MatSnackBar } from '@angular/material';
import { SnackBar } from '../../SnackBar/snackbar.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
    firstFormGroup: FormGroup;
    submitted:boolean = false;
    
    constructor(private productService:ProductService, private _formBuilder: FormBuilder, private snackBar: MatSnackBar) {

    }
    
    ngOnInit() {
        this.imageUploaded=false;
        this.title = 'Add Product';
        this.productService.fetchCategory().subscribe(resp=> this.categories=resp.body.payload);
        
         this.firstFormGroup = this._formBuilder.group({
          priceCtrl: ['', Validators.required],
          //imageCtrl: ['', Validators.required],
          catCtrl: ['', Validators.required],
          descCtrl: ['', Validators.required],
          taxCtrl: ['', Validators.required],
          nameCtrl: ['', Validators.required]
        });
    } 
    
    saveProduct(myform){
        if(myform.valid && !this.submitted){
            this.submitted = true;
            this.productService.saveProduct(this.newProduct).subscribe(resp=>{
                let snackBarRef = this.snackBar.openFromComponent(SnackBar,{
                        data:resp.body.payload.resp,
                        duration: 500
                });
                this.imageUploaded=false;
                this.submitted = false;
                this.newProduct= new Product(undefined,undefined,undefined,undefined,undefined,undefined);
                myform.resetForm();
            });
        }
    }
    
    onChange(event) {
        var files = event.srcElement.files;
        
        if(files[0].size<41000){
            var reader = new FileReader();
            reader.onload = (e)=> {
                this.path=reader.result;
                reader.onload =this._handleReaderLoaded.bind(this);
                reader.readAsBinaryString(files[0]);
             }
            this.imageUploaded=true;
            this.fileSizeError=false;
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
