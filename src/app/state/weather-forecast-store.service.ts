import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { WeatherForecastStoreState } from '../models/weather-forecast-store-state.model';
import { ObservableStore } from '@codewithdan/observable-store';
import { GeoCodeData, GeoCodeLocation } from '../models/geo-code.model';
import { EMPTY, catchError } from 'rxjs';
import { NotificationService } from '../services/notification/notification.service';
import { messages } from '../consts/messages.const';
import { Point } from '../models/NWS_API_Models/point';
import { GridpointForecastUnits } from '../models/NWS_API_Models/gridpointForecastUnits';
import { GridpointForecast } from '../models/NWS_API_Models/gridpointForecast';

const enum WeatherForecastStates {
  INIT_STATE = 'INIT_STATE',
  FORECAST_UPDATED = 'FORECAST_UPDATED',
  LAT_AND_LONG_UPDATED = 'LAT_AND_LONG_UPDATED',
  POINT_UPDATD = 'POINT_UPDATD',
}

const initState: WeatherForecastStoreState = {
  forecast: {
    properties: {}
  },
  latAndLong: {
    latitude: '',
    longitude: '',
  },
  point: {
    properties: {}
  },
  units: GridpointForecastUnits.Us,
};
@Injectable({
  providedIn: 'root',
})
export class WeatherForecastStoreService extends ObservableStore<WeatherForecastStoreState> {
  constructor(
    private api: ApiService,
    private notificationService: NotificationService
  ) {
    super({
      stateSliceSelector: (state: WeatherForecastStoreState) => {
        if (!state) return initState;
        return {
          forecast: state.forecast,
          latAndLong: state.latAndLong,
          point: state.point,
          units: state.units,
        };
      },
    });
    this.setState(initState, WeatherForecastStates.INIT_STATE);
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
      });
  }

  getPointsData() {
    const st = this.getState();
    console.log('st.latAndLong', st.latAndLong)
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
        console.log('pointsData', pointsData)

        const st = this.getState();
        st.point = pointsData;
        this.setState(st, WeatherForecastStates.POINT_UPDATD);
        this.getForecastData();
      });
  }

  getForecastData() {
    const st = this.getState();
    console.log(st.point)
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
