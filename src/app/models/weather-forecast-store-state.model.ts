import { GridpointForecast } from './NWS_API_Models/gridpointForecast';
import { GridpointForecastUnits } from './NWS_API_Models/gridpointForecastUnits';
import { Point } from './NWS_API_Models/point';
import { CurrentTemp } from './current-temp.model';
import { LatAndLong } from './geo-code.model';

export interface WeatherForecastStoreState {
  currentTemp: CurrentTemp;
  forecast: GridpointForecast;
  latAndLong: LatAndLong;
  location: string;
  point: Point;
  units: GridpointForecastUnits;
}
