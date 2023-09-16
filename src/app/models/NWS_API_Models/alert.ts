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
import { AlertCertainty } from './alertCertainty';
import { AlertGeocode } from './alertGeocode';
import { AlertId } from './alertId';
import { AlertMessageType } from './alertMessageType';
import { AlertReferences } from './alertReferences';
import { AlertSeverity } from './alertSeverity';
import { AlertStatus } from './alertStatus';
import { AlertUrgency } from './alertUrgency';

/**
 * An object representing a public alert message. Unless otherwise noted, the fields in this object correspond to the National Weather Service CAP v1.2 specification, which extends the OASIS Common Alerting Protocol (CAP) v1.2 specification and USA Integrated Public Alert and Warning System (IPAWS) Profile v1.0. Refer to this documentation for more complete information. http://docs.oasis-open.org/emergency/cap/v1.2/CAP-v1.2-os.html http://docs.oasis-open.org/emergency/cap/v1.2/ipaws-profile/v1.0/cs01/cap-v1.2-ipaws-profile-cs01.html https://alerts.weather.gov/#technical-notes-v12 
 */
export interface Alert { 
    id?: AlertId;
    /**
     * A textual description of the area affected by the alert.
     */
    areaDesc?: string;
    geocode?: AlertGeocode;
    /**
     * An array of API links for zones affected by the alert. This is an API-specific extension field and is not part of the CAP specification. 
     */
    affectedZones?: Array<string>;
    /**
     * A list of prior alerts that this alert updates or replaces.
     */
    references?: Array<AlertReferences>;
    /**
     * The time of the origination of the alert message.
     */
    sent?: Date;
    /**
     * The effective time of the information of the alert message.
     */
    effective?: Date;
    /**
     * The expected time of the beginning of the subject event of the alert message.
     */
    onset?: Date;
    /**
     * The expiry time of the information of the alert message.
     */
    expires?: Date;
    /**
     * The expected end time of the subject event of the alert message.
     */
    ends?: Date;
    status?: AlertStatus;
    messageType?: AlertMessageType;
    /**
     * The code denoting the category of the subject event of the alert message.
     */
    category?: Alert.CategoryEnum;
    severity?: AlertSeverity;
    certainty?: AlertCertainty;
    urgency?: AlertUrgency;
    /**
     * The text denoting the type of the subject event of the alert message.
     */
    event?: string;
    /**
     * Email address of the NWS webmaster.
     */
    sender?: string;
    /**
     * The text naming the originator of the alert message.
     */
    senderName?: string;
    /**
     * The text headline of the alert message.
     */
    headline?: string;
    /**
     * The text describing the subject event of the alert message.
     */
    description?: string;
    /**
     * The text describing the recommended action to be taken by recipients of the alert message. 
     */
    instruction?: string;
    /**
     * The code denoting the type of action recommended for the target audience. This corresponds to responseType in the CAP specification. 
     */
    response?: Alert.ResponseEnum;
    /**
     * System-specific additional parameters associated with the alert message. The keys in this object correspond to parameter definitions in the NWS CAP specification. 
     */
    parameters?: { [key: string]: Array<any>; };
}
export namespace Alert {
    export type CategoryEnum = 'Met' | 'Geo' | 'Safety' | 'Security' | 'Rescue' | 'Fire' | 'Health' | 'Env' | 'Transport' | 'Infra' | 'CBRNE' | 'Other';
    export const CategoryEnum = {
        Met: 'Met' as CategoryEnum,
        Geo: 'Geo' as CategoryEnum,
        Safety: 'Safety' as CategoryEnum,
        Security: 'Security' as CategoryEnum,
        Rescue: 'Rescue' as CategoryEnum,
        Fire: 'Fire' as CategoryEnum,
        Health: 'Health' as CategoryEnum,
        Env: 'Env' as CategoryEnum,
        Transport: 'Transport' as CategoryEnum,
        Infra: 'Infra' as CategoryEnum,
        CBRNE: 'CBRNE' as CategoryEnum,
        Other: 'Other' as CategoryEnum
    };
    export type ResponseEnum = 'Shelter' | 'Evacuate' | 'Prepare' | 'Execute' | 'Avoid' | 'Monitor' | 'Assess' | 'AllClear' | 'None';
    export const ResponseEnum = {
        Shelter: 'Shelter' as ResponseEnum,
        Evacuate: 'Evacuate' as ResponseEnum,
        Prepare: 'Prepare' as ResponseEnum,
        Execute: 'Execute' as ResponseEnum,
        Avoid: 'Avoid' as ResponseEnum,
        Monitor: 'Monitor' as ResponseEnum,
        Assess: 'Assess' as ResponseEnum,
        AllClear: 'AllClear' as ResponseEnum,
        None: 'None' as ResponseEnum
    };
}