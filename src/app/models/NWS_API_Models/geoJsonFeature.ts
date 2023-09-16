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
import { GeoJsonGeometry } from './geoJsonGeometry';
import { JsonLdContext } from './jsonLdContext';

/**
 * A GeoJSON feature. Please refer to IETF RFC 7946 for information on the GeoJSON format.
 */
export interface GeoJsonFeature { 
    context?: JsonLdContext;
    id?: string;
    type: GeoJsonFeature.TypeEnum;
    geometry: GeoJsonGeometry;
    properties: any;
}
export namespace GeoJsonFeature {
    export type TypeEnum = 'Feature';
    export const TypeEnum = {
        Feature: 'Feature' as TypeEnum
    };
}