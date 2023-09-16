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
import { GeoJsonFeatureCollection } from './geoJsonFeatureCollection';
import { JsonLdContext } from './jsonLdContext';
import { ObservationStationCollectionGeoJsonFeatures } from './observationStationCollectionGeoJsonFeatures';
import { PaginationInfo } from './paginationInfo';

export interface ObservationStationCollectionGeoJson extends GeoJsonFeatureCollection { 
    features?: Array<ObservationStationCollectionGeoJsonFeatures>;
    observationStations?: Array<string>;
    pagination?: PaginationInfo;
}
export namespace ObservationStationCollectionGeoJson {
}