import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: '',
  templateUrl: 'dialog.html'
})

export class Dialog{
  
    constructor(
        public dialogRef: MatDialogRef<Dialog>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  onYesClick(): void {
    this.dialogRef.close('Yes');
  }

  onNoClick():void{
      this.dialogRef.close('No');
  }

}
