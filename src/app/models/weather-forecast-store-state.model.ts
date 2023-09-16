import { GridpointForecast } from './NWS_API_Models/gridpointForecast';
import { GridpointForecastUnits } from './NWS_API_Models/gridpointForecastUnits';
import { Point } from './NWS_API_Models/point';
import { LatAndLong } from './geo-code.model';

export interface WeatherForecastStoreState {
  forecast: GridpointForecast;
  latAndLong: LatAndLong;
  point: Point;
  units: GridpointForecastUnits;
}
