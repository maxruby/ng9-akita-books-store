/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Metadata } from '../models/metadata';
@Injectable({
  providedIn: 'root',
})
class DictionaryService extends __BaseService {
  static readonly booksDictionaryListOfflineMetadataPath = '/dictionary/listOfflineMetadata';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns a list of offline dictionary metadata available
   * @param params The `DictionaryService.BooksDictionaryListOfflineMetadataParams` containing the following parameters:
   *
   * - `cpksver`: The device/version ID from which to request the data.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksDictionaryListOfflineMetadataResponse(params: DictionaryService.BooksDictionaryListOfflineMetadataParams): __Observable<__StrictHttpResponse<Metadata>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.cpksver != null) __params = __params.set('cpksver', params.cpksver.toString());
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/dictionary/listOfflineMetadata`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Metadata>;
      })
    );
  }
  /**
   * Returns a list of offline dictionary metadata available
   * @param params The `DictionaryService.BooksDictionaryListOfflineMetadataParams` containing the following parameters:
   *
   * - `cpksver`: The device/version ID from which to request the data.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksDictionaryListOfflineMetadata(params: DictionaryService.BooksDictionaryListOfflineMetadataParams): __Observable<Metadata> {
    return this.booksDictionaryListOfflineMetadataResponse(params).pipe(
      __map(_r => _r.body as Metadata)
    );
  }
}

module DictionaryService {

  /**
   * Parameters for booksDictionaryListOfflineMetadata
   */
  export interface BooksDictionaryListOfflineMetadataParams {

    /**
     * The device/version ID from which to request the data.
     */
    cpksver: string;

    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;

    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;

    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;

    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;

    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;

    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }
}

export { DictionaryService }
