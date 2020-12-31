import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //dependency injection
  constructor(private http: HttpClient) { }

  getCarBrands(){
    return this.http.get('https://private-anon-d227a111a6-carsapi1.apiary-mock.com/manufacturers')
  }
}
