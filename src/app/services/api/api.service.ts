import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeoCodeData, GeoCodeLocation, LatAndLong } from 'src/app/models/geo-code.model';
import { Point } from 'src/app/models/NWS_API_Models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _baseGeoCodeURL = 'https://geocode.maps.co/search?q=';
  private _baseNWSURL = 'https://api.weather.gov'

  constructor(private http: HttpClient) {}

  getLatAndLong(location: string) {
    return this.http.get<GeoCodeData[]>(
      `${this._baseGeoCodeURL}${location}`
    )
  }


  getPointsData(latAndLong: LatAndLong) {
    return this.http.get<Point>(
      `${this._baseNWSURL}/points/${latAndLong.latitude}%${latAndLong.longitude}`
    )
  }
}
