import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

import { AddCarComponent } from './add-car.component';

describe('AddCarComponent', () => {
  let component: AddCarComponent;
  let fixture: ComponentFixture<AddCarComponent>;

  const storeMock = {
    select() {
      return of({
        cars: [{
          "model": "Maruti 800",
          "type": "Car",
          "color": "Red",
          "licenseNumber": "TN5600DF",
          "owner": "Karthik",
          "capacity": "N/A"
        },
        {
          "model": "Mazda Cruz",
          "type": "Truck",
          "color": "White",
          "licenseNumber": "FG5600YU",
          "owner": "Ravi",
          "capacity": "200Ibs"
        }],
        loading: false,
        error: null
      });
    },

    dispatch(obj) {
      console.log('dispatching from the mock store!')
    },

    pipe(obj) {
      console.log('pipe from the mock store!')
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarComponent ],
      imports: [HttpClientTestingModule,MatSnackBarModule,FormsModule],
      providers: [
        {
          provide: Store,
          useValue: storeMock
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onTypeChange', () => {
    spyOn(component, 'onTypeChange');
    const event = {
      "value": "Car"
    }
    component.onTypeChange(event);
    expect(component.onTypeChange).toHaveBeenCalled();
  });

});
