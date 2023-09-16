import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeoCodeData, GeoCodeLocation } from 'src/app/models/geo-code.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _baseGeoCodeURL = 'https://geocode.maps.co/search?q=';

  constructor(private http: HttpClient) {}

  getLatAndLong(location: string) {
    return this.http.get<GeoCodeData[]>(
      `${this._baseGeoCodeURL}${location}`
    )
  }
}
