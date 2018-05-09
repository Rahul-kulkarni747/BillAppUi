import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
   transform(items: any[], term: string): any {
       let returnObj:any=null;
       if(typeof items[0] !== 'undefined' && typeof term !== 'undefined')
           returnObj = items.filter(item => (item.name.toLowerCase()).indexOf(term.toLowerCase()) !== -1);
       else 
           returnObj=items ;
       
       return returnObj;
    }
}
