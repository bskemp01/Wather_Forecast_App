export enum UnitTypes {
    F = 'F',
    C = 'C',
}

export enum UnitsTOGeoUnits {
    'F' = 'us',
    'C' = 'si',
}

export type LocationType = 'zipCode' | 'cityAndState';

export const LocationType = {
    'Zip Code': 'zipCode' as LocationType,
    'City & State': 'cityAndState' as LocationType,
}