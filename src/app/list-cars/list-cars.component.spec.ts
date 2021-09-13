import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

//import { MOCK_DATA } from '../shared/
import { ListCarsComponent } from './list-cars.component';

describe('ListCarsComponent', () => {
  let component: ListCarsComponent;
  let fixture: ComponentFixture<ListCarsComponent>;

  //component.cars$ = of(MOCK_DATA);

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
      declarations: [ ListCarsComponent ],
      imports: [HttpClientTestingModule],
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
    fixture = TestBed.createComponent(ListCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
