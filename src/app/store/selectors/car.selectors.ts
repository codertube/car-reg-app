import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CarState } from '../reducers/cars.reducers';

export const getCarState = createFeatureSelector<CarState>('cars');

export const getCarsLoading = createSelector(
    getCarState,
    state => state.loading
);

export const getAllCars = createSelector(
    getCarState,
    state => state.cars
);

export const getCarsError = createSelector(
    getCarState,
    state => state.error
);