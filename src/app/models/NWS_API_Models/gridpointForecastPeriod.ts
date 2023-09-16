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
import { QuantitativeValue } from './quantitativeValue';

/**
 * An object containing forecast information for a specific time period (generally 12-hour or 1-hour). 
 */
export interface GridpointForecastPeriod { 
    /**
     * Sequential period number.
     */
    number?: number;
    /**
     * A textual identifier for the period. This value will not be present for hourly forecasts. 
     */
    name?: string;
    /**
     * The starting time that this forecast period is valid for.
     */
    startTime?: Date;
    /**
     * The ending time that this forecast period is valid for.
     */
    endTime?: Date;
    /**
     * Indicates whether this period is daytime or nighttime.
     */
    isDaytime?: boolean;
    /**
     * High/low temperature for the period, depending on whether the period is day or night. This property as an integer value is deprecated. Future versions will express this value as a quantitative value object. To make use of the future standard format now, set the \"forecast_temperature_qv\" feature flag on the request. 
     */
    temperature?: QuantitativeValue | number;
    /**
     * The unit of the temperature value (Fahrenheit or Celsius). This property is deprecated. Future versions will indicate the unit within the quantitative value object for the temperature property. To make use of the future standard format now, set the \"forecast_temperature_qv\" feature flag on the request. 
     */
    temperatureUnit?: GridpointForecastPeriod.TemperatureUnitEnum;
    /**
     * If not null, indicates a non-diurnal temperature trend for the period (either rising temperature overnight, or falling temperature during the day) 
     */
    temperatureTrend?: GridpointForecastPeriod.TemperatureTrendEnum;
    probabilityOfPrecipitation?: QuantitativeValue;
    dewpoint?: QuantitativeValue;
    relativeHumidity?: QuantitativeValue;
    /**
     * Wind speed for the period. This property as an string value is deprecated. Future versions will express this value as a quantitative value object. To make use of the future standard format now, set the \"forecast_wind_speed_qv\" feature flag on the request. 
     */
    windSpeed?: QuantitativeValue | string;
    /**
     * Peak wind gust for the period. This property as an string value is deprecated. Future versions will express this value as a quantitative value object. To make use of the future standard format now, set the \"forecast_wind_speed_qv\" feature flag on the request. 
     */
    windGust?: QuantitativeValue | string;
    /**
     * The prevailing direction of the wind for the period, using a 16-point compass.
     */
    windDirection?: GridpointForecastPeriod.WindDirectionEnum;
    /**
     * A link to an icon representing the forecast summary.
     */
    icon?: string;
    /**
     * A brief textual forecast summary for the period.
     */
    shortForecast?: string;
    /**
     * A detailed textual forecast for the period.
     */
    detailedForecast?: string;
}
export namespace GridpointForecastPeriod {
    export type TemperatureUnitEnum = 'F' | 'C';
    export const TemperatureUnitEnum = {
        F: 'F' as TemperatureUnitEnum,
        C: 'C' as TemperatureUnitEnum
    };
    export type TemperatureTrendEnum = 'rising' | 'falling';
    export const TemperatureTrendEnum = {
        Rising: 'rising' as TemperatureTrendEnum,
        Falling: 'falling' as TemperatureTrendEnum
    };
    export type WindDirectionEnum = 'N' | 'NNE' | 'NE' | 'ENE' | 'E' | 'ESE' | 'SE' | 'SSE' | 'S' | 'SSW' | 'SW' | 'WSW' | 'W' | 'WNW' | 'NW' | 'NNW';
    export const WindDirectionEnum = {
        N: 'N' as WindDirectionEnum,
        NNE: 'NNE' as WindDirectionEnum,
        NE: 'NE' as WindDirectionEnum,
        ENE: 'ENE' as WindDirectionEnum,
        E: 'E' as WindDirectionEnum,
        ESE: 'ESE' as WindDirectionEnum,
        SE: 'SE' as WindDirectionEnum,
        SSE: 'SSE' as WindDirectionEnum,
        S: 'S' as WindDirectionEnum,
        SSW: 'SSW' as WindDirectionEnum,
        SW: 'SW' as WindDirectionEnum,
        WSW: 'WSW' as WindDirectionEnum,
        W: 'W' as WindDirectionEnum,
        WNW: 'WNW' as WindDirectionEnum,
        NW: 'NW' as WindDirectionEnum,
        NNW: 'NNW' as WindDirectionEnum
    };
}