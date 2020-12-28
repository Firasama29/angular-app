import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent implements OnInit {

  /*task 1*/ clickCounter: number = 0;

  /*task 2*/ name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  countClick(){
    this.clickCounter +=1;
  }

  //this method is for ngClass to define multiple classes
  setClass(){
    let classObject = {
      active: this.clickCounter > 4,
      nonactive: this.clickCounter < 4
    }
    return classObject;
  }
}
