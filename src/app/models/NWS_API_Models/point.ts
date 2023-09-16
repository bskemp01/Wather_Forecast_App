/**
 * weather.gov API
 * weather.gov API
 *
 * OpenAPI spec version: 1.11.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { GeometryString } from './geometryString';
import { JsonLdContext } from './jsonLdContext';
import { NWSForecastOfficeId } from './nWSForecastOfficeId';
import { RelativeLocationGeoJson } from './relativeLocationGeoJson';
import { RelativeLocationJsonLd } from './relativeLocationJsonLd';

export interface Point { 
    context?: JsonLdContext;
    geometry?: GeometryString;
    id?: string;
    type?: Point.TypeEnum;
    cwa?: NWSForecastOfficeId;
    forecastOffice?: string;
    gridId?: NWSForecastOfficeId;
    gridX?: number;
    gridY?: number;
    forecast?: string;
    forecastHourly?: string;
    forecastGridData?: string;
    observationStations?: string;
    relativeLocation?: RelativeLocationGeoJson | RelativeLocationJsonLd;
    forecastZone?: string;
    county?: string;
    fireWeatherZone?: string;
    timeZone?: string;
    radarStation?: string;
}
export namespace Point {
    export type TypeEnum = 'wx:Point';
    export const TypeEnum = {
        WxPoint: 'wx:Point' as TypeEnum
    };
}