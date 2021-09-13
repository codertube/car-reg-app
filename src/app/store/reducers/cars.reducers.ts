import { CarActionTypes, CarAction } from '../actions/cars.actions';
import { Car } from '../../shared/model/car.model';

export interface CarState {
    cars: Car[],
    loading: boolean,
    error: string | any
}

const initialState: CarState = {
    cars: [],
    loading: false,
    error: ""
    }

export function CarsReducer(state: CarState = initialState, action: CarAction): CarState{
 switch(action.type){

    case CarActionTypes.GET_CARS:
        return {
            ...state,
            loading: true
        }
    case CarActionTypes.GET_CARS_SUCCESS:
        return {
            ...state,
            cars: action.payload,
            loading: false
        }
    case CarActionTypes.GET_CARS_FAIL:
        return {
            ...state,
            error: action.payload,
            loading: false
        };

    case CarActionTypes.ADD_CAR:
        return {
            ...state,
            loading: true
        }
    case CarActionTypes.ADD_CAR_SUCCESS:{
        return {
            ...state,
            cars: [action.payload, ...state.cars],
            loading: false
        }
    }
    case CarActionTypes.ADD_CAR_FAIL:
        return {
            ...state,
            error: action.payload,
            loading: false
        }
    default: 
        return state;
 }   
}