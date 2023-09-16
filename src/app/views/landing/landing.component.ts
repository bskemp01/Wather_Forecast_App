import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { statesList } from 'src/app/consts/statesList.const';
import { GeoLocationFormModel } from 'src/app/models/forms.model';
import { GeoCodeLocation } from 'src/app/models/geo-code.model';
import { States } from 'src/app/models/states.model';
import { WeatherForecastStoreState } from 'src/app/models/weather-forecast-store-state.model';
import { WeatherForecastStoreService } from 'src/app/state/weather-forecast-store.service';
import { distinctUntilChangedWithProp } from 'src/app/utils/utils';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
  statesList = States;
  landingPageForm!: FormGroup<GeoLocationFormModel>;
  geoLocation: GeoCodeLocation = {
    city: '',
    state: '',
    postalCode: null,
  };

  private sub = new Subscription();

  constructor(
    private weatherForecastStoreService: WeatherForecastStoreService
  ) {
    this.landingPageForm = new FormGroup<GeoLocationFormModel>({
      city: new FormControl(''),
      state: new FormControl(''),
      zipCode: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.sub.add(
      this.weatherForecastStoreService.stateChanged
        .pipe(distinctUntilChangedWithProp('latAndLong'))
        .subscribe((state: WeatherForecastStoreState) => {
          console.log(state);
          // this.geoLocation = state.latAndLong
        })
    );
  }

  getLatAndLong() {
    this.geoLocation = {
      city: this.landingPageForm.controls.city?.value,
      state: this.landingPageForm.controls.state?.value,
      postalCode: this.landingPageForm.controls.zipCode?.value,
    };
    this.weatherForecastStoreService.getLatAndLong(this.geoLocation);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
