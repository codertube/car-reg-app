import { ActionReducerMap } from '@ngrx/store';
import * as fromCar from '../../store/reducers/cars.reducers';

export interface AppState {
  cars: fromCar.CarState;
}

export const reducers: ActionReducerMap<AppState> = {
  cars: fromCar.CarsReducer
};

