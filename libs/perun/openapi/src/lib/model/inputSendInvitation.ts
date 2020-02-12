/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.9.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * input to sendInvitation
 */
export interface InputSendInvitation { 
    /**
     * vo id
     */
    vo: number;
    /**
     * name of person used in invitation email (optional)
     */
    name?: string;
    /**
     * email address to send invitation to
     */
    email: string;
    /**
     * preferred language to use
     */
    language: string;
}

