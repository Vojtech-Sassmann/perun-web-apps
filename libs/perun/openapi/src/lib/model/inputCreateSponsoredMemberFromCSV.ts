/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.14.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * input for createSponsoredMembersFromCSV
 */
export interface InputCreateSponsoredMemberFromCSV { 
    /**
     * values separated with semicolons
     */
    data: Array<string>;
    /**
     * csv header for the given data, values are also split with semicolons
     */
    header: string;
    vo: number;
    sponsor: number;
    namespace: string;
    validityTo?: string;
    sendActivationLink?: boolean;
}

