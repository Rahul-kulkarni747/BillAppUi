import { Component, OnInit, ViewChildren } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../Settings/Product';
import { Category } from '../Settings/AddCategory/Category';
import { DashboardService } from './productFetch.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    templateUrl: './ProductBill.html',
    styleUrls: ['./ProductBill.css'],
    providers: [ ],
    animations: [
        trigger('flipState', [
          state('active', style({
            transform: 'rotateY(360deg)'
          })),
          state('inactive', style({
            transform: 'rotateY(0)'
          })),
          transition('active => inactive', animate('500ms ease-out')),
          transition('inactive => active', animate('500ms ease-in'))
        ])
      ]
})

export class dashboardComponent implements OnInit{

    categories:Category[];
    search: any = '';
    categorySelected: string;
    flip: string[] = [];
    @ViewChildren('itemRef') itemRef;
    left = 0;
    overFlown = false;
    leftReached = true;
    rightReached = false;
    
    constructor(private dashboardService:DashboardService, private route: ActivatedRoute) {
    }
    
    ngAfterViewInit() {
        this.itemRef.changes.subscribe(t =>{
            this.categoriesChanged();
        });
    }

    ngOnInit() {
        this.dashboardService.fetchCategory().subscribe(resp=> {
            this.categories=resp.body.payload;
            for(let x=0;x<this.categories.length;x++)
                this.flip.push('inactive');
            
        });
        
        if(this.route.snapshot.firstChild != null)
            this.categorySelected = this.route.snapshot.firstChild.url[0].path;
       
        
    }
    
    categoriesChanged(){
        setTimeout(()=> {
            let element =this.itemRef._results[0].nativeElement; 
            if(element.offsetWidth < element.scrollWidth)
                this.overFlown = true;
            else
                this.overFlown = false;
        },10);
    }
    
    setStep(index: number) {
        this.dashboardService.step = index;
    }
    
    toggleFlip(index) {
        for(let x=0;x<this.categories.length;x++)
            this.flip[x] = 'inactive';
        this.flip[index]='active';
    }
    
    scrollRight(){
        let width = this.itemRef._results[0].nativeElement.offsetWidth;
        if(this.left+150 < width){
            this.left +=150;
            this.rightReached = false;
            this.leftReached = false;
        }
        else if(this.left+150 > width || this.left+150 == width){
            this.left = width;   
            this.rightReached = true;
            this.leftReached = false;
        }
        
        this.itemRef._results[0].nativeElement.scroll({ left:this.left, behavior: 'smooth' });
    }
    
    scrollLeft(){
        if(this.left-150 > 0){
            this.left -=150;
            this.leftReached = false;
            this.rightReached = false;
        }
        else if(this.left-150 < 0 || this.left-150 == 0){
            this.leftReached = true;
            this.rightReached = false;
            this.left = 0;   
        }
        
        this.itemRef._results[0].nativeElement.scroll({ left:this.left, behavior: 'smooth' });
    }
    
}
