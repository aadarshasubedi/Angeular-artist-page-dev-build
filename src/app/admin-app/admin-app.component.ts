import { Component, OnInit } from '@angular/core';
import {MdSnackBarModule} from '@angular/material';
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-admin-app',
  templateUrl: './admin-app.component.html',
  styleUrls: ['./admin-app.component.css']
})
export class AdminAppComponent implements OnInit {

  constructor(public snackBar: MdSnackBar) {

   }
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

   popToast() {
    }

  ngOnInit() {
   
  }

}

