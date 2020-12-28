import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css'],
  
})
export class MyListComponent implements OnInit {

  manufacturers: Object; 
  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getCarBrands().subscribe(data => {
      this.manufacturers = data;
      console.log(this.manufacturers);
    });
  }

}
