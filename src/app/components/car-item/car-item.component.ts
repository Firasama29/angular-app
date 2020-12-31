import { Cars } from 'src/app/model/cars';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {
  isLoading : boolean;
  
  @Input() car: Cars;
  @Output() deleteCar: EventEmitter<Cars> = new EventEmitter(); //we're emitting something to the parent component
  constructor() { }


  ngOnInit(): void {
  }

  setPrice(){
    
    //here if the car price is higher than 40000, the css style is applied 
    let Price={
     // 'decorate' : this.car.avg_price < 40000,
      
    }
    return Price;
  }

  onCheck(car){
    
      car.checked = !car.checked;
    }


  onDelete(car){
    this.deleteCar.emit(car);
    
  }
}

//for delete method, we import EventEmitter, use emit() method and @output
