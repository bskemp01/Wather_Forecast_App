import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { WeatherForecastStoreState } from '../models/weather-forecast-store-state.model';
import { ObservableStore } from '@codewithdan/observable-store';
import { GeoCodeData, GeoCodeLocation } from '../models/geo-code.model';
import { EMPTY, catchError } from 'rxjs';
import { NotificationService } from '../services/api/notification/notification.service';
import { messages } from '../consts/messages.const';

const enum WeatherForecastStates {
  INIT_STATE = 'INIT_STATE',
  LAT_AND_LONG_UPDATED = 'LAT_AND_LONG_UPDATED',
}

const initState: WeatherForecastStoreState = {
  latAndLong: {
    latitude: '',
    longitude: '',
  },
};
@Injectable({
  providedIn: 'root',
})
export class WeatherForecastStoreService extends ObservableStore<WeatherForecastStoreState> {
  constructor(
    private api: ApiService,
    private notificationService: NotificationService,
    private router: Router
  ) {
    super({
      stateSliceSelector: (state: WeatherForecastStoreState) => {
        if (!state) return initState;
        return {
          latAndLong: state.latAndLong,
        };
      },
    });
    this.setState(initState, WeatherForecastStates.INIT_STATE);
  }

  getLatAndLong(location: GeoCodeLocation) {
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
        this.setState(st, WeatherForecastStates.LAT_AND_LONG_UPDATED);
      });
  }

  private setError(title: string, description: string, details: string) {
    this.notificationService.setError({ title, description, details });
  }

  private setSnackbar(message: string, confirm: string, duration = 2500) {
    this.notificationService.setSnackbar(message, confirm, duration);
  }
}
