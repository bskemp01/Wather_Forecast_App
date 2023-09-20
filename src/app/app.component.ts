import { Component } from '@angular/core';
import { RoutingService } from './services/routing/routing.service';
import { PageTypes } from './models/pageTypes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Weather-Forecast';
  backgroundImage: string = '';

  constructor(
    private routingService: RoutingService,
  ) {
    const currentTime = new Date().toString().split(' ')[4];

    if ('00:00:00' <= currentTime) {
      this.backgroundImage = 'night';
    }
    if ('06:00:00' <= currentTime) {
      this.backgroundImage = 'morning';
    }
    if ('12:00:00' <= currentTime) {
      this.backgroundImage = 'afternoon';
    }
    if ('17:00:00' <= currentTime) {
      this.backgroundImage = 'sunset';
    }
    if ('20:00:00' <= currentTime) {
      this.backgroundImage = 'night';
    }

    this.routingService.navigateRoutes(PageTypes.LANDING)
  }
}
