import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CarRegServiceService } from '../../shared/services/car-reg-service.service';
import { AddCarAction, AddCarFailAction, AddCarSuccessAction, CarActionTypes, GetCarsFailAction, GetCarsSuccessAction } from '../actions/cars.actions';

@Injectable()
export class CarEffects {

  constructor(private actions: Actions, private service: CarRegServiceService) { }

  @Effect()
  getCars = this.actions.pipe(
    ofType(CarActionTypes.GET_CARS),
    switchMap(() => this.service.getAllCars().pipe(
      map(cars => new GetCarsSuccessAction(cars)),
      catchError(err => of(new GetCarsFailAction(err)))
    ))
  );

  @Effect()
  AddCar = this.actions.pipe(
    ofType<AddCarAction>(CarActionTypes.ADD_CAR),
    switchMap((action) => this.service.addCar(action.payload).pipe(
      map(car => new AddCarSuccessAction(car)),
      catchError(err => of(new AddCarFailAction(err)))
    ))
  );

}