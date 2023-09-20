import { DisplayFullForcast } from "../models/display-forecast.model";
import { currentTempMock } from "./current-temp-data.mock";
import { gridpointForecastDataMock } from "./forecast-data.mock";

export const displayFullForecastData: DisplayFullForcast = {
    currentTemp: currentTempMock,
    gridpointForecastData: gridpointForecastDataMock,
}