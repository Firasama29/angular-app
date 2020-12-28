import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Object;
  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getCarBrands().subscribe(data => {
      this.cars = data;
      console.log(this.cars);
    })
  }

}
