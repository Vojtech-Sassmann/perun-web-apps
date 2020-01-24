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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { ApplicationForm } from '../model/applicationForm';
import { PerunException } from '../model/perunException';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class RegistrarManagerService {

    protected basePath = 'https://perun.cesnet.cz/krb/rpc';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    /**
     * Gets an application form for a given Group.
     * There is exactly one form for membership per Group, one form is used for both initial registration and annual account expansion, just the form items are marked whether the should be present in one, the other, or both types of application. 
     * @param group id of Group
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGroupApplicationForm(group: number, observe?: 'body', reportProgress?: boolean): Observable<ApplicationForm>;
    public getGroupApplicationForm(group: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApplicationForm>>;
    public getGroupApplicationForm(group: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApplicationForm>>;
    public getGroupApplicationForm(group: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (group === null || group === undefined) {
            throw new Error('Required parameter group was null or undefined when calling getGroupApplicationForm.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (group !== undefined && group !== null) {
            queryParameters = queryParameters.set('group', <any>group);
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (BearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<ApplicationForm>(`${this.configuration.basePath}/json/registrarManager/getApplicationForm/group`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets an application form for a given VO.
     * There is exactly one form for membership per VO, one form is used for both initial registration and annual account expansion, just the form items are marked whether the should be present in one, the other, or both types of application. 
     * @param vo id of Vo
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getVoApplicationForm(vo: number, observe?: 'body', reportProgress?: boolean): Observable<ApplicationForm>;
    public getVoApplicationForm(vo: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApplicationForm>>;
    public getVoApplicationForm(vo: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApplicationForm>>;
    public getVoApplicationForm(vo: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (vo === null || vo === undefined) {
            throw new Error('Required parameter vo was null or undefined when calling getVoApplicationForm.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (vo !== undefined && vo !== null) {
            queryParameters = queryParameters.set('vo', <any>vo);
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (BearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<ApplicationForm>(`${this.configuration.basePath}/json/registrarManager/getApplicationForm/vo`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
