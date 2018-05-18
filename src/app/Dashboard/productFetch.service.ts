import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalVariable } from '../globalVariables';
import { Product } from './../Settings/Product';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ResponseBody } from '../response';

@Injectable()
export class DashboardService {

  step: number = 0;
  search: String;

  constructor (
    private http: HttpClient,
    private router: Router
  ) {}

    fetchProducts(): Observable<ResponseBody> {
        let url = GlobalVariable.BASE_API_URL + 'fetchProducts';      
        return this.http.get<ResponseBody>(url);
    }
    
    fetchCategory(): Observable<ResponseBody> {
        console.log(GlobalVariable.BASE_API_URL);
        let url = GlobalVariable.BASE_API_URL + 'fetchCategory';      
        return this.http.get<ResponseBody>(url);
    }

    fetchProductsByCategory(id): Observable<ResponseBody> {
        let url = GlobalVariable.BASE_API_URL + 'fetchProductsOfCategory?categoryId='+id;  
        this.step = id;    
        return this.http.get<ResponseBody>(url);
    }

}