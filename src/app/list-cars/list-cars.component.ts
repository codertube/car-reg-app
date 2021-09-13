import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, merge, Subject, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Car } from '../shared/model/car.model';
import { CarState } from '../store/reducers/cars.reducers';
import { GetCarsAction } from '../store/actions/cars.actions';
import { getAllCars, getCarsLoading, getCarsError} from '../store/selectors/car.selectors';

export interface View {
  id: string;
  value: string;
}

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss']
})
export class ListCarsComponent implements OnInit {

  public dataSource = new MatTableDataSource<Car>();
  searchKey: string;
  cars$: Observable<Car[]>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>
  selectedView: View;

  constructor(private store: Store<CarState>) { }

  ngOnInit(): void {
    this.store.dispatch(new GetCarsAction());
    this.loading$ = this.store.pipe(select(getCarsLoading));
    this.error$ = this.store.pipe(select(getCarsError));
    this.cars$ = this.store.pipe(select(getAllCars));
    this.cars$.subscribe((value: any) => { 
      this.dataSource.data = value;
    });
    // this.cars$.pipe(tap(items => {
    //   //this.dataSource = new MatTableDataSource(items)
    //   this.dataSource.data = items;
    // }));
  }

  views: View[] = [
    {id: 'Basic', value: 'Basic View'},
    {id: 'Extended', value: 'Extended View'}
  ];
 
  displayedColumns: string[] = ['type', 'model', 'color', 'licenseNumber','owner', 'capacity'];

  onCarViewChange(event : any){
    if (event.value == 'Basic') {
      this.displayedColumns = ['type', 'model', 'color', 'licenseNumber'];
    } else {
      this.displayedColumns = ['type', 'model', 'color', 'licenseNumber','owner', 'capacity'];
    }
  }

  public doFilter = () => {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
}
