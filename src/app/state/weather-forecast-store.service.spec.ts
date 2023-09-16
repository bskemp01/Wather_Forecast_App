import { TestBed } from '@angular/core/testing';

import { WeatherForecastStoreService } from './weather-forecast-store.service';

describe('WeatherForecastStoreService', () => {
  let service: WeatherForecastStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherForecastStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
