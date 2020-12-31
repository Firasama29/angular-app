
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cars } from '../model/cars';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl = 'https://private-anon-d227a111a6-carsapi1.apiary-mock.com/manufacturers';
  
  //dependency injection
  constructor(private http: HttpClient) { }
  
  //getCarBrands(){
    //return this.http.get(this.baseUrl)
  //}

  //get data
  getCarBrands(): Observable<Cars[]>{
    return this.http.get<Cars[]>(this.baseUrl);
  }

  //delete data
  deleteCars(car:Cars):Observable<Cars>{
     const url= `${this.baseUrl}/${car.id}`;
     return this.http.delete<Cars>(url, httpOptions);
  }
}
