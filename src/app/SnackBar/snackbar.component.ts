import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: '',
  templateUrl: './snackbar.html',
})

export class SnackBar {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}