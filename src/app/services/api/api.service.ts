import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  GeoCodeData,
  GeoCodeLocation,
  LatAndLong,
} from 'src/app/models/geo-code.model';
import {
  GridpointForecast,
  GridpointForecastUnits,
  Point,
} from 'src/app/models/NWS_API_Models/models';
import { CurrentTemp } from 'src/app/models/current-temp.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _baseGeoCodeURL = 'https://geocode.maps.co/search?q=';
  private _baseNWSURL = 'https://api.weather.gov';
  private _openMetroURL = 'https://api.open-meteo.com/v1/forecast?';

  constructor(private http: HttpClient) {}

  getCurrentTemp(latAndLong: LatAndLong) {
    return this.http.get<CurrentTemp>(
      `${this._openMetroURL}latitude=${latAndLong.latitude}&longitude=${latAndLong.longitude}&current_weather=true&temperature_unit=fahrenheit`
    );
  }

  getForecastData(point: Point, units: GridpointForecastUnits) {
    return this.http.get<GridpointForecast>(
      `${this._baseNWSURL}/gridpoints/${point.properties.gridId}/${point.properties.gridX},${point.properties.gridY}/forecast?units=${units}`
    );
  }

  getLatAndLong(location: string) {
    return this.http.get<GeoCodeData[]>(`${this._baseGeoCodeURL}${location}`);
  }

  getPointsData(latAndLong: LatAndLong) {
    return this.http.get<Point>(
      `${this._baseNWSURL}/points/${latAndLong.latitude},${latAndLong.longitude}`
    );
  }
}
