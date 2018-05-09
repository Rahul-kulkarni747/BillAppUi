import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DashboardService } from './productFetch.service';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Product } from './../Settings/Product';

@Injectable()
export class ProductListResolver implements Resolve<Product>{
    constructor(private router: Router,private dashboardService:DashboardService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
        let id=route.paramMap.get('id');
        return this.dashboardService.fetchProductsByCategory(id).map(resp=> {
             if(resp){
                return resp.body.payload;
            }
            else{
                this.router.navigate(['']);
                return null;
            }   
        });
        
    }
}