import { Component, Input, OnInit } from '@angular/core';
import { DisplayFullForcast } from 'src/app/models/display-forecast.model';

@Component({
  selector: 'app-forecast-display',
  templateUrl: './forecast-display.component.html',
  styleUrls: ['./forecast-display.component.scss'],
})
export class ForecastDisplayComponent{
  @Input() displayFullForcastData!: DisplayFullForcast;
}
