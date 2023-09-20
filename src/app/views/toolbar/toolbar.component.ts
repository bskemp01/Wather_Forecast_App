import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PageTypes } from 'src/app/models/pageTypes.model';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  get PageTypes() {
    return PageTypes;
  }

  currentPage = PageTypes.LANDING;
  private sub = new Subscription();
  constructor(private router: Router, private routingService: RoutingService) {}

  ngOnInit(): void {
    this.sub.add(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (event.url.split('/').pop() === PageTypes.LANDING) {
            this.currentPage = PageTypes.LANDING;
          }
          if (event.url.split('/').pop() === PageTypes.FORECAST) {
            this.currentPage = PageTypes.FORECAST;
          }
        }
      })
    );
  }

  backToLanding() {
    this.routingService.navigateRoutes(PageTypes.LANDING);
  }
}
