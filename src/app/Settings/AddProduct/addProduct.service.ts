import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { GlobalVariable } from '../../globalVariables';
import { MatSnackBar } from '@angular/material';
import { Category } from '../AddCategory/Category';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../../response';

@Injectable()
export class ProductService {
  constructor (
    private http: HttpClient,
    public snackBar: MatSnackBar
  ) {}

  saveProduct(data) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        let url = GlobalVariable.BASE_API_URL+'addProduct';     
        this.http.post<ResponseBody>(url, data,{headers: headers}).subscribe(response => {
             let snackBar=this.snackBar.open(response.body.payload.resp);
        })
  }
    
    fetchCategory(): Observable<ResponseBody> {
        let url = GlobalVariable.BASE_API_URL + 'fetchCategory';      
        return this.http.get<ResponseBody>(url);
  }
}
