import { Cars } from 'src/app/model/cars';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: any;
  
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCarBrands().subscribe(data => {
      this.cars = data;
      console.log(this.cars);
    })
  }

  deleteCar(car:Cars){
   //delete from UI
   this.cars = this.cars.filter(c => c.id !== car.id)
   //delete from server
   this.carService.deleteCars(car).subscribe()
   
  }

}
