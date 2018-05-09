import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalVariable } from '../../globalVariables';

@Injectable()
export class CategoryService {
  constructor (
    private http: HttpClient
  ) {}
    
    saveCategory(data){
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        let url = GlobalVariable.BASE_API_URL+'addCategoty';     
        this.http.post(url, data,{headers: headers}).subscribe(res => {
             console.log(res);
        })
    }
}
