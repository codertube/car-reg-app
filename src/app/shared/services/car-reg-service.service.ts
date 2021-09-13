import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Car } from '../../shared/model/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarRegServiceService {

  constructor(private http: HttpClient) { }

  getAllCars() {
    let carsStored = JSON.parse(window.localStorage.getItem('cars'));
    if (carsStored === null) {
      carsStored = [];
    }
    return of(carsStored);
  }

  addCar(car: Car) {
    const carsStored = window.localStorage.getItem('cars');
    let cars = [];
    if (carsStored !== null) {
      cars = JSON.parse(carsStored);
    }
    cars.push(car);
    window.localStorage.setItem('cars', JSON.stringify(cars));
    return of(car);
  }
}
