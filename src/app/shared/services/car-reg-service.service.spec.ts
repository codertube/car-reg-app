import { TestBed } from '@angular/core/testing';

import { CarRegServiceService } from './car-reg-service.service';

describe('CarRegServiceService', () => {
  let service: CarRegServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarRegServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
