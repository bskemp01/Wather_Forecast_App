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
import { ZoneCollectionGeoJsonFeatures } from './zoneCollectionGeoJsonFeatures';

export interface ZoneCollectionGeoJson extends GeoJsonFeatureCollection { 
    features?: Array<ZoneCollectionGeoJsonFeatures>;
}
export namespace ZoneCollectionGeoJson {
}