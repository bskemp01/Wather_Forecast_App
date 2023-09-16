import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () =>
      import('./views/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'forecast',
    loadChildren: () =>
      import('./views/forecast/forecast.module').then((m) => m.ForecastModule),
  },
  {
    path: '**',
    redirectTo: 'landing',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
