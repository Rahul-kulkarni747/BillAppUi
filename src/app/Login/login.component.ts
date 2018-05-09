import { Component,OnInit,ViewChild,TemplateRef,AfterViewInit } from '@angular/core';
import { Dialog } from '../Dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { Router,RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../domain/loginObj';

@Component({
  templateUrl: 'login.template.html'
})

export class LoginComponent implements AfterViewInit,OnInit {
  
    @ViewChild('mytemplate') templateRef: TemplateRef<any>;
    snapshot:RouterStateSnapshot;
    dialogRef:any;
    firstFormGroup: FormGroup;
    loginObj: Login = new Login();
    
    constructor(private dialog: MatDialog, private router:Router, private _formBuilder:FormBuilder) {
    
    }
    
    ngOnInit(){
        this.firstFormGroup = this._formBuilder.group({
          userNameCtrl: ['', Validators.required],
          passwordCtrl: ['', Validators.required]
        });
        console.log(this.loginObj);
    }
    
     onLoginClick(): void {
        this.dialogRef.close();
      }
    
     onCancelClick(): void {
        this.dialogRef.close();
      }

    ngAfterViewInit() {
        
        setTimeout(()=> {
            this.dialogRef = this.dialog.open(this.templateRef, {
                disableClose:true,
                hasBackdrop: true
            });
            
            this.dialogRef.afterClosed().subscribe(result =>{
                this.router.navigate([{ outlets: { loginPopUp: null }}]); 
            });
        },10);
    }
    
}
