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
import { ApplicationFormItemData } from './applicationFormItemData';
import { Application } from './application';


/**
 * input to submitApplication
 */
export interface InputSubmitApplication { 
    app: Application;
    data: Array<ApplicationFormItemData>;
}

