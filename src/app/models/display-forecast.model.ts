import { GridpointForecastPeriod } from "./NWS_API_Models/gridpointForecastPeriod";
import { CurrentTemp } from "./current-temp.model";

export interface DisplayGridPointForecast {
    samePeriod?: GridpointForecastPeriod[];
}

export interface DisplayFullForcast {
    currentTemp?: CurrentTemp;
    gridpointForecastData?: DisplayGridPointForecast[];
}