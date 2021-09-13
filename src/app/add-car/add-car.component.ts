import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store, select } from '@ngrx/store';

import { Car } from '../shared/model/car.model';
import { CarState } from '../store/reducers/cars.reducers';
import { AddCarAction } from '../store/actions/cars.actions';

export interface Color {
  id: string;
  value: string;
}

export interface Type {
  id: string;
  value: string;
}

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  constructor(private store: Store<CarState>, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  @ViewChild('myForm',{static:false}) public MyForm: NgForm;

  fname:string;
  selectedType: string;
  isTruckSelected: boolean;

  carData: Car = {
    model:"",
    type : "",
    color:"",
    licenseNumber:"",
    owner:"",
    capacity:""
  }

  types: Type[] = [
    {id: '1', value: 'Car'},
    {id: '2', value: 'Truck'}
  ];

  colors: Color[] = [
    {id: '1', value: 'Red'},
    {id: '2', value: 'White'},
    {id: '3', value: 'Blue'}
  ];

  onTypeChange(event : any){
    let selectedType = event.value;
    if (selectedType == "Truck") {
      this.isTruckSelected = true;
    } else {
      this.isTruckSelected = false;
      this.carData.capacity = "N/A";
    }
  }

  submitForm(e:any){
    console.log(this.MyForm);
    if(this.MyForm.valid){
        this.store.dispatch(new AddCarAction({...this.carData}));
        this.MyForm.reset();
        this.MyForm.resetForm();
    }else{
      this._snackBar.open("Please fill all fields","",{duration:1000});
    }
  }
}
