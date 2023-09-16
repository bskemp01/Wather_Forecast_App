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
import { GridpointQuantitativeValueLayerValues } from './gridpointQuantitativeValueLayerValues';
import { UnitOfMeasure } from './unitOfMeasure';

/**
 * A gridpoint layer consisting of quantitative values (numeric values with associated units of measure). 
 */
export interface GridpointQuantitativeValueLayer { 
    uom?: UnitOfMeasure;
    values: Array<GridpointQuantitativeValueLayerValues>;
}