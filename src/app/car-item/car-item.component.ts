import { Cars } from './../../cars';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {
  
  @Input() car: Cars;
  constructor() { }

  ngOnInit(): void {
  }

  setPrice(){
    //here if the car price is higher than 40000, the css style is applied 
    let Price={
      'decorate' : this.car.avg_price < 40000,
      
    }
    return Price;
  }
}
