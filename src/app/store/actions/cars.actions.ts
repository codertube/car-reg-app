import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Car } from '../../shared/model/car.model';

export enum CarActionTypes {
  GET_CARS = '[Car] Get Cars',
  GET_CARS_SUCCESS = '[Car] Get Cars success',
  GET_CARS_FAIL = '[Car] Get Cars fail',
  ADD_CAR = '[Car] Add Car',
  ADD_CAR_SUCCESS = '[Car] Add Car success',
  ADD_CAR_FAIL = '[Car] Add Car fail'
}

export class GetCarsAction implements Action {
  readonly type = CarActionTypes.GET_CARS;
}

export class GetCarsSuccessAction implements Action {
  readonly type = CarActionTypes.GET_CARS_SUCCESS;
  constructor(public payload: Car[]) { }
}

export class GetCarsFailAction implements Action {
  readonly type = CarActionTypes.GET_CARS_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}

export class AddCarAction implements Action {
  readonly type = CarActionTypes.ADD_CAR;

  constructor(public payload: Car) {}
}

export class AddCarSuccessAction implements Action {
  readonly type = CarActionTypes.ADD_CAR_SUCCESS;

  constructor(public payload: Car) {}
}

export class AddCarFailAction implements Action {
  readonly type = CarActionTypes.ADD_CAR_FAIL;

  constructor(public payload: string) {}
}

export type CarAction = GetCarsAction 
  | GetCarsSuccessAction 
  | GetCarsFailAction 
  | AddCarAction 
  | AddCarSuccessAction 
  | AddCarFailAction;