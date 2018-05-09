import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { } from '@types/googlemaps';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalVariable, Globals } from '../../globalVariables';
import { MatTableDataSource } from '@angular/material';
import { Product } from './../../Settings/Product';

@Component({
    templateUrl: './confirmOrder.template.html',
    styleUrls: ['./confirmOrder.css'],
    providers: []
})

export class ConfirmOrder implements OnInit {
    
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    displayedColumns = ['name', 'price', 'quantity','tax','total'];
    dataSource = new MatTableDataSource<Product>(this.globals.cart.products);
    
    
    constructor(private globals: Globals, private _formBuilder: FormBuilder,  private cdr: ChangeDetectorRef){
        
    }
    
    
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
          firstCtrl: ['', Validators.required],
          lastCtrl: ['', Validators.required],
          addrCtrl: ['', Validators.required],
          emailCtrl: ['', [Validators.required,Validators.email]],
          phoneCtrl: ['', [Validators.required,Validators.maxLength(10)]]
        });
        
        this.secondFormGroup = this._formBuilder.group({
          secondCtrl: ['', Validators.required]
        });
    }
    
     getCurrentLocation(){
        let options = {
          enableHighAccuracy: true
        };
        
        let geocoder = new google.maps.Geocoder;
        
        navigator.geolocation.getCurrentPosition((pos) => {
            let latlng = {lat: pos.coords.latitude, lng: pos.coords.longitude};
            console.log(latlng  )
             geocoder.geocode({'location': latlng}, (results, status) => {
                 console.log(status)
                if (status.toString() === 'OK') {
                    this.globals.userInfo.address = results[0].formatted_address;
                }
             });
        });
    }
    
    
    
}