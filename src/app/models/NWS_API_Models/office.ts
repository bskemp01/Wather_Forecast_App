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
import { JsonLdContext } from './jsonLdContext';
import { OfficeAddress } from './officeAddress';

export interface Office { 
    context?: JsonLdContext;
    type?: Office.TypeEnum;
    id?: string;
    id?: string;
    name?: string;
    address?: OfficeAddress;
    telephone?: string;
    faxNumber?: string;
    email?: string;
    sameAs?: string;
    nwsRegion?: string;
    parentOrganization?: string;
    responsibleCounties?: Array<string>;
    responsibleForecastZones?: Array<string>;
    responsibleFireZones?: Array<string>;
    approvedObservationStations?: Array<string>;
}
export namespace Office {
    export type TypeEnum = 'GovernmentOrganization';
    export const TypeEnum = {
        GovernmentOrganization: 'GovernmentOrganization' as TypeEnum
    };
}