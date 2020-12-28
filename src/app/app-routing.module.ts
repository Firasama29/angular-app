import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import {MyAppComponent} from './my-app/my-app.component';
import {MyListComponent} from './my-list/my-list.component';

const routes: Routes = [
  {path:'', component: MyAppComponent},
  {path: 'my-list', component: MyListComponent},
  {path: 'cars', component: CarsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
