import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCarComponent } from './add-car/add-car.component';
import { ListCarsComponent } from './list-cars/list-cars.component';

const routes: Routes = [
  {path:'addcar',component : AddCarComponent},
  {path:'listcars',component : ListCarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
