import { Component, OnDestroy, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { Subscription } from 'rxjs';
import { periodsDataMock } from 'src/app/mock/forecast-data.mock';
import { locationMock } from 'src/app/mock/location.mock';
import { GridpointForecastPeriod } from 'src/app/models/NWS_API_Models/gridpointForecastPeriod';
import { CurrentTemp } from 'src/app/models/current-temp.model';
import {
  DisplayFullForcast,
  DisplayGridPointForecast,
} from 'src/app/models/display-forecast.model';
import { WeatherForecastStoreState } from 'src/app/models/weather-forecast-store-state.model';
import { RoutingService } from 'src/app/services/routing/routing.service';
import { WeatherForecastStoreService } from 'src/app/state/weather-forecast-store.service';
import { distinctUntilChangedWithProp } from 'src/app/utils/utils';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit, OnDestroy {
  isForecastLoading$ = this.weatherForecastStoreService.isForecastLoading$;

  displayFullForcastData!: DisplayFullForcast;
  location!: string;

  private currentTemp!: CurrentTemp;
  private displayData: DisplayGridPointForecast[] = [];
  private periodsData: GridpointForecastPeriod[] = [];
  private periodsDataKeys: string[] = [];
  private sub = new Subscription();

  constructor(
    private weatherForecastStoreService: WeatherForecastStoreService
  ) {}

  ngOnInit(): void {
    console.log(this.isForecastLoading$.value);
    this.sub.add(
      this.weatherForecastStoreService.stateChanged
        .pipe(distinctUntilChangedWithProp('forecast'))
        .subscribe((state: WeatherForecastStoreState) => {
          this.currentTemp = state.currentTemp;
          this.location = state.location;
          if (state.forecast.properties.periods!) {
            this.periodsData = state.forecast.properties.periods!;
            console.log(this.periodsData);
            this.formatData();
            this.weatherForecastStoreService.isForecastLoading$.next(false);
          }
        })
    );
  }

  formatData() {
    this.periodsData.forEach((period) => {
      period.startTime = format(new Date(period.startTime!), 'MM/dd/yyyy');
      period.endTime = format(new Date(period.endTime!), 'MM/dd/yyyy');

      if (!this.periodsDataKeys.includes(period.startTime)) {
        this.periodsDataKeys.push(period.startTime);
      }
    });

    this.periodsDataKeys.forEach((key, index) => {
      const tempArray: GridpointForecastPeriod[] = [];
      this.periodsData.forEach((period) => {
        if (period.startTime === key) {
          tempArray.push(period);
        }
      });
      this.displayData[index] = {
        samePeriod: tempArray,
      };
    });

    this.displayFullForcastData = {
      currentTemp: this.currentTemp,
      gridpointForecastData: this.displayData,
    };
    console.log(this.displayFullForcastData);
    console.log(this.isForecastLoading$.value);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
