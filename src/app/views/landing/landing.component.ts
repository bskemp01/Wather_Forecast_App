import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GridpointForecastUnits } from 'src/app/models/NWS_API_Models/gridpointForecastUnits';
import { GeoLocationFormModel } from 'src/app/models/forms.model';
import { GeoCodeLocation } from 'src/app/models/geo-code.model';
import { States } from 'src/app/models/states.model';
import {
  LocationType,
  UnitTypes,
  UnitsTOGeoUnits,
} from 'src/app/models/types.model';
import { WeatherForecastStoreState } from 'src/app/models/weather-forecast-store-state.model';
import { WeatherForecastStoreService } from 'src/app/state/weather-forecast-store.service';
import { distinctUntilChangedWithProp } from 'src/app/utils/utils';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
  get LocationType() {
    return LocationType;
  }

  statesList = States;
  landingPageForm!: FormGroup<GeoLocationFormModel>;
  locationType = LocationType['City & State'];
  unitTypes = UnitTypes;
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
      locationType: new FormControl(LocationType['City & State'], {
        nonNullable: true,
      }),
      city: new FormControl(''),
      state: new FormControl(''),
      units: new FormControl(UnitTypes.F, { nonNullable: true }),
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

    this.sub.add(
      this.weatherForecastStoreService.stateChanged
        .pipe(distinctUntilChangedWithProp('forecast'))
        .subscribe((state: WeatherForecastStoreState) => {
          console.log('forecast', state.forecast);
          // this.geoLocation = state.latAndLong
        })
    );

    this.landingPageForm.controls.locationType?.valueChanges.subscribe(
      (value) => {
        this.locationType = value;
      }
    );
  }

  //use this later for mobile viewing
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    console.log(window.innerWidth);
  }

  getLatAndLong() {
    const unitTypes =
      this.landingPageForm.controls.units?.value === UnitTypes.F
        ? UnitsTOGeoUnits.F
        : UnitsTOGeoUnits.C;

    this.geoLocation = {
      city: this.landingPageForm.controls.city?.value,
      state: this.landingPageForm.controls.state?.value,
      postalCode: this.landingPageForm.controls.zipCode?.value,
    };
    this.weatherForecastStoreService.getLatAndLong(
      this.geoLocation,
      GridpointForecastUnits.Us
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
