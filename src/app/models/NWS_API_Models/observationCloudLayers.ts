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
import { MetarSkyCoverage } from './metarSkyCoverage';
import { QuantitativeValue } from './quantitativeValue';

export interface ObservationCloudLayers { 
    base: QuantitativeValue;
    amount: MetarSkyCoverage;
}