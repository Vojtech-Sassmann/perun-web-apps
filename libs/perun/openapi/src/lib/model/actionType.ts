/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.20.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Action types for attributes.
 */
export type ActionType = 'WRITE' | 'WRITE_VO' | 'WRITE_PUBLIC' | 'READ' | 'READ_VO' | 'READ_PUBLIC';

export const ActionType = {
    WRITE: 'WRITE' as ActionType,
    WRITEVO: 'WRITE_VO' as ActionType,
    WRITEPUBLIC: 'WRITE_PUBLIC' as ActionType,
    READ: 'READ' as ActionType,
    READVO: 'READ_VO' as ActionType,
    READPUBLIC: 'READ_PUBLIC' as ActionType
};

