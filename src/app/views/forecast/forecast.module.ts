import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast.component';
import { RouterModule, Routes } from '@angular/router';
import { ForecastDisplayComponent } from './forecast-display/forecast-display.component';
import { LoadingComponent } from '../loading/loading.component';
import { LoadingModule } from '../loading/loading.module';
import { MatDividerModule } from '@angular/material/divider';

const routes: Routes = [
  {
    path: '',
    component: ForecastComponent,
  },
];

@NgModule({
  declarations: [ForecastComponent, ForecastDisplayComponent],
  imports: [CommonModule, LoadingModule, MatDividerModule, RouterModule.forChild(routes)],
})
export class ForecastModule {}
