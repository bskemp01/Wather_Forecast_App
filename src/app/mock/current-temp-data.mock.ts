import { CurrentTemp } from '../models/current-temp.model';

export const currentTempMock: CurrentTemp = {
  latitude: 52.52,
  longitude: 13.419998,
  generationtime_ms: 0.048041343688964844,
  utc_offset_seconds: 0,
  timezone: 'GMT',
  timezone_abbreviation: 'GMT',
  elevation: 38.0,
  current_weather: {
    temperature: 70.4,
    windspeed: 12.7,
    winddirection: 205,
    weathercode: 80,
    is_day: 1,
    time: '2023-09-18T15:00',
  },
};
