export enum UnitTypes {
    F = 'F - Fahrenheit',
    C = 'C - Celsius',
}

export enum UnitsTOGeoUnits {
    'F - Fahrenheit' = 'us',
    'C - Celsius' = 'si',
}

export type LocationType = 'zipCode' | 'cityAndState';

export const LocationType = {
    'Zip Code': 'zipCode' as LocationType,
    'City & State': 'cityAndState' as LocationType,
}