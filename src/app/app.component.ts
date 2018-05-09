import { Component, OnInit  } from '@angular/core';
import { Globals } from './globalVariables';
import { routerTransition } from './globalVariables';


@Component({
  selector: 'app-root',
  templateUrl: './layout.html',
  styleUrls:['./app.component.css'],
  animations: [ routerTransition ]
})

export class AppComponent implements OnInit{
    
    constructor ( private globals: Globals
    ) {};
    
    ngOnInit(){
        document.querySelector('.mdl-layout__drawer').addEventListener('click', function () {
          document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
          this.classList.remove('is-visible');
        }, false);
    }
    
    
    getState(outlet) {
         return outlet.activatedRouteData.state;
    }
    
}
