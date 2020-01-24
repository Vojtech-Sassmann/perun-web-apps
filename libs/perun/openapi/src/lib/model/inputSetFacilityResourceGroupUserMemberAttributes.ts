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
import { Attribute } from './attribute';


/**
 * input to setFacilityResourceGroupUserMemberAttributes
 */
export interface InputSetFacilityResourceGroupUserMemberAttributes { 
    /**
     * facility id
     */
    facility: number;
    /**
     * resource id
     */
    resource: number;
    /**
     * group id
     */
    group: number;
    /**
     * user id
     */
    user: number;
    /**
     * member id
     */
    member: number;
    attributes: Array<Attribute>;
}

