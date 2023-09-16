import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PageTypes } from 'src/app/models/pageTypes.model';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  constructor(private router: Router) {}

  navigateRoutes(route: string) {
    switch (route) {
      case PageTypes.LANDING:
        this.router.navigate(['/landing']);
        break;
      case PageTypes.FORECAST:
        this.router.navigate(['/forecast']);
        break;
      default:
        this.router.navigate(['/landing']);
        break;
    }
  }
}
