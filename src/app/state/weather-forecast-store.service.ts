import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { WeatherForecastStoreState } from '../models/weather-forecast-store-state.model';
import { ObservableStore } from '@codewithdan/observable-store';
import { GeoCodeData, GeoCodeLocation } from '../models/geo-code.model';
import { BehaviorSubject, EMPTY, catchError } from 'rxjs';
import { NotificationService } from '../services/notification/notification.service';
import { messages } from '../consts/messages.const';
import { Point } from '../models/NWS_API_Models/point';
import { GridpointForecastUnits } from '../models/NWS_API_Models/gridpointForecastUnits';
import { GridpointForecast } from '../models/NWS_API_Models/gridpointForecast';
import { CurrentTemp } from '../models/current-temp.model';
import { currentTempMock } from '../mock/current-temp-data.mock';

const enum WeatherForecastStates {
  INIT_STATE = 'INIT_STATE',
  CURRENT_TEMP_UPDATED = 'CURRENT_TEMP_UPDATED',
  FORECAST_UPDATED = 'FORECAST_UPDATED',
  LAT_AND_LONG_UPDATED = 'LAT_AND_LONG_UPDATED',
  POINT_UPDATD = 'POINT_UPDATD',
}

const initState: WeatherForecastStoreState = {
  currentTemp: {},
  forecast: {
    properties: {},
  },
  latAndLong: {
    latitude: '',
    longitude: '',
  },
  location: '',
  point: {
    properties: {},
  },
  units: GridpointForecastUnits.Us,
};
@Injectable({
  providedIn: 'root',
})
export class WeatherForecastStoreService extends ObservableStore<WeatherForecastStoreState> {
  isForecastLoading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private api: ApiService,
    private notificationService: NotificationService
  ) {
    super({
      stateSliceSelector: (state: WeatherForecastStoreState) => {
        if (!state) return initState;
        return {
          currentTemp: state.currentTemp,
          forecast: state.forecast,
          latAndLong: state.latAndLong,
          location: state.location,
          point: state.point,
          units: state.units,
        };
      },
    });
    this.setState(initState, WeatherForecastStates.INIT_STATE);
  }

  getCurrentTemp() {
    const st = this.getState();
    this.api
      .getCurrentTemp(st.latAndLong)
      .pipe(
        catchError((err) => {
          this.setError(
            messages.errorMessages.pointsDataError,
            messages.errorMessages.pointsDataErrorMsg,
            ''
          );
          return EMPTY;
        })
      )
      .subscribe((currentTempData: CurrentTemp) => {
        const st = this.getState();
        st.currentTemp = currentTempData;
        this.setState(st, WeatherForecastStates.CURRENT_TEMP_UPDATED);
      });
  }

  getLatAndLong(location: GeoCodeLocation, units: GridpointForecastUnits) {
    const formattedLocation =
      location.city && location.state
        ? `${location.city}+${location.state}+US`
        : location.postalCode
        ? `${location.postalCode.toString()}+US`
        : '';

    this.api
      .getLatAndLong(formattedLocation)
      .pipe(
        catchError((err) => {
          this.setError(
            messages.errorMessages.latAndLongError,
            messages.errorMessages.latAndLongErrorMsg,
            ''
          );
          return EMPTY;
        })
      )
      .subscribe((latAndLongData: GeoCodeData[]) => {
        const st = this.getState();
        st.latAndLong = {
          latitude: latAndLongData[0].lat,
          longitude: latAndLongData[0].lon,
        };
        st.units = units;
        this.setState(st, WeatherForecastStates.LAT_AND_LONG_UPDATED);
        this.getPointsData();
        this.getCurrentTemp();
      });
  }

  getPointsData() {
    const st = this.getState();
    this.api
      .getPointsData(st.latAndLong)
      .pipe(
        catchError((err) => {
          this.setError(
            messages.errorMessages.pointsDataError,
            messages.errorMessages.pointsDataErrorMsg,
            ''
          );
          return EMPTY;
        })
      )
      .subscribe((pointsData: Point) => {
        const st = this.getState();
        st.point = pointsData;
        st.location =
          pointsData.properties.relativeLocation?.properties.city +
          ', ' +
          pointsData.properties.relativeLocation?.properties.state;
        this.setState(st, WeatherForecastStates.POINT_UPDATD);
        this.getForecastData();
      });
  }

  getForecastData() {
    this.isForecastLoading$.next(true);

    const st = this.getState();
    this.api
      .getForecastData(st.point, st.units)
      .pipe(
        catchError((err) => {
          this.setError(
            messages.errorMessages.pointsDataError,
            messages.errorMessages.pointsDataErrorMsg,
            ''
          );
          return EMPTY;
        })
      )
      .subscribe((forecastData: GridpointForecast) => {
        const st = this.getState();
        st.forecast = forecastData;
        this.setState(st, WeatherForecastStates.FORECAST_UPDATED);
      });
  }

  private setError(title: string, description: string, details: string) {
    this.notificationService.setError({ title, description, details });
  }

  private setSnackbar(message: string, confirm: string, duration = 2500) {
    this.notificationService.setSnackbar(message, confirm, duration);
  }
}
