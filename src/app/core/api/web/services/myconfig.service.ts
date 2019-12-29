/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Usersettings } from '../models/usersettings';
import { DownloadAccesses } from '../models/download-accesses';
import { RequestAccess } from '../models/request-access';
import { Volumes } from '../models/volumes';
@Injectable({
  providedIn: 'root',
})
class MyconfigService extends __BaseService {
  static readonly booksMyconfigGetUserSettingsPath = '/myconfig/getUserSettings';
  static readonly booksMyconfigReleaseDownloadAccessPath = '/myconfig/releaseDownloadAccess';
  static readonly booksMyconfigRequestAccessPath = '/myconfig/requestAccess';
  static readonly booksMyconfigSyncVolumeLicensesPath = '/myconfig/syncVolumeLicenses';
  static readonly booksMyconfigUpdateUserSettingsPath = '/myconfig/updateUserSettings';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Gets the current settings for the user.
   * @param params The `MyconfigService.BooksMyconfigGetUserSettingsParams` containing the following parameters:
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
  booksMyconfigGetUserSettingsResponse(params: MyconfigService.BooksMyconfigGetUserSettingsParams): __Observable<__StrictHttpResponse<Usersettings>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/myconfig/getUserSettings`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Usersettings>;
      })
    );
  }
  /**
   * Gets the current settings for the user.
   * @param params The `MyconfigService.BooksMyconfigGetUserSettingsParams` containing the following parameters:
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
  booksMyconfigGetUserSettings(params: MyconfigService.BooksMyconfigGetUserSettingsParams): __Observable<Usersettings> {
    return this.booksMyconfigGetUserSettingsResponse(params).pipe(
      __map(_r => _r.body as Usersettings)
    );
  }

  /**
   * Release downloaded content access restriction.
   * @param params The `MyconfigService.BooksMyconfigReleaseDownloadAccessParams` containing the following parameters:
   *
   * - `volumeIds`: The volume(s) to release restrictions for.
   *
   * - `cpksver`: The device/version ID from which to release the restriction.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `locale`: ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksMyconfigReleaseDownloadAccessResponse(params: MyconfigService.BooksMyconfigReleaseDownloadAccessParams): __Observable<__StrictHttpResponse<DownloadAccesses>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.volumeIds || []).forEach(val => {if (val != null) __params = __params.append('volumeIds', val.toString())});
    if (params.cpksver != null) __params = __params.set('cpksver', params.cpksver.toString());
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/myconfig/releaseDownloadAccess`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DownloadAccesses>;
      })
    );
  }
  /**
   * Release downloaded content access restriction.
   * @param params The `MyconfigService.BooksMyconfigReleaseDownloadAccessParams` containing the following parameters:
   *
   * - `volumeIds`: The volume(s) to release restrictions for.
   *
   * - `cpksver`: The device/version ID from which to release the restriction.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `locale`: ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksMyconfigReleaseDownloadAccess(params: MyconfigService.BooksMyconfigReleaseDownloadAccessParams): __Observable<DownloadAccesses> {
    return this.booksMyconfigReleaseDownloadAccessResponse(params).pipe(
      __map(_r => _r.body as DownloadAccesses)
    );
  }

  /**
   * Request concurrent and download access restrictions.
   * @param params The `MyconfigService.BooksMyconfigRequestAccessParams` containing the following parameters:
   *
   * - `volumeId`: The volume to request concurrent/download restrictions for.
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `nonce`: The client nonce value.
   *
   * - `cpksver`: The device/version ID from which to request the restrictions.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `locale`: ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
   *
   * - `licenseTypes`: The type of access license to request. If not specified, the default is BOTH.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksMyconfigRequestAccessResponse(params: MyconfigService.BooksMyconfigRequestAccessParams): __Observable<__StrictHttpResponse<RequestAccess>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.volumeId != null) __params = __params.set('volumeId', params.volumeId.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.nonce != null) __params = __params.set('nonce', params.nonce.toString());
    if (params.cpksver != null) __params = __params.set('cpksver', params.cpksver.toString());
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.licenseTypes != null) __params = __params.set('licenseTypes', params.licenseTypes.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/myconfig/requestAccess`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RequestAccess>;
      })
    );
  }
  /**
   * Request concurrent and download access restrictions.
   * @param params The `MyconfigService.BooksMyconfigRequestAccessParams` containing the following parameters:
   *
   * - `volumeId`: The volume to request concurrent/download restrictions for.
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `nonce`: The client nonce value.
   *
   * - `cpksver`: The device/version ID from which to request the restrictions.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `locale`: ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
   *
   * - `licenseTypes`: The type of access license to request. If not specified, the default is BOTH.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksMyconfigRequestAccess(params: MyconfigService.BooksMyconfigRequestAccessParams): __Observable<RequestAccess> {
    return this.booksMyconfigRequestAccessResponse(params).pipe(
      __map(_r => _r.body as RequestAccess)
    );
  }

  /**
   * Request downloaded content access for specified volumes on the My eBooks shelf.
   * @param params The `MyconfigService.BooksMyconfigSyncVolumeLicensesParams` containing the following parameters:
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `nonce`: The client nonce value.
   *
   * - `cpksver`: The device/version ID from which to release the restriction.
   *
   * - `volumeIds`: The volume(s) to request download restrictions for.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `showPreorders`: Set to true to show pre-ordered books. Defaults to false.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `locale`: ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `includeNonComicsSeries`: Set to true to include non-comics series. Defaults to false.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `features`: List of features supported by the client, i.e., 'RENTALS'
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksMyconfigSyncVolumeLicensesResponse(params: MyconfigService.BooksMyconfigSyncVolumeLicensesParams): __Observable<__StrictHttpResponse<Volumes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.nonce != null) __params = __params.set('nonce', params.nonce.toString());
    if (params.cpksver != null) __params = __params.set('cpksver', params.cpksver.toString());
    (params.volumeIds || []).forEach(val => {if (val != null) __params = __params.append('volumeIds', val.toString())});
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.showPreorders != null) __params = __params.set('showPreorders', params.showPreorders.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.includeNonComicsSeries != null) __params = __params.set('includeNonComicsSeries', params.includeNonComicsSeries.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    (params.features || []).forEach(val => {if (val != null) __params = __params.append('features', val.toString())});
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/myconfig/syncVolumeLicenses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Volumes>;
      })
    );
  }
  /**
   * Request downloaded content access for specified volumes on the My eBooks shelf.
   * @param params The `MyconfigService.BooksMyconfigSyncVolumeLicensesParams` containing the following parameters:
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `nonce`: The client nonce value.
   *
   * - `cpksver`: The device/version ID from which to release the restriction.
   *
   * - `volumeIds`: The volume(s) to request download restrictions for.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `showPreorders`: Set to true to show pre-ordered books. Defaults to false.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `locale`: ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `includeNonComicsSeries`: Set to true to include non-comics series. Defaults to false.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `features`: List of features supported by the client, i.e., 'RENTALS'
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksMyconfigSyncVolumeLicenses(params: MyconfigService.BooksMyconfigSyncVolumeLicensesParams): __Observable<Volumes> {
    return this.booksMyconfigSyncVolumeLicensesResponse(params).pipe(
      __map(_r => _r.body as Volumes)
    );
  }

  /**
   * Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.
   * @param params The `MyconfigService.BooksMyconfigUpdateUserSettingsParams` containing the following parameters:
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
   * - `body`:
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksMyconfigUpdateUserSettingsResponse(params: MyconfigService.BooksMyconfigUpdateUserSettingsParams): __Observable<__StrictHttpResponse<Usersettings>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    __body = params.body;
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/myconfig/updateUserSettings`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Usersettings>;
      })
    );
  }
  /**
   * Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.
   * @param params The `MyconfigService.BooksMyconfigUpdateUserSettingsParams` containing the following parameters:
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
   * - `body`:
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksMyconfigUpdateUserSettings(params: MyconfigService.BooksMyconfigUpdateUserSettingsParams): __Observable<Usersettings> {
    return this.booksMyconfigUpdateUserSettingsResponse(params).pipe(
      __map(_r => _r.body as Usersettings)
    );
  }
}

module MyconfigService {

  /**
   * Parameters for booksMyconfigGetUserSettings
   */
  export interface BooksMyconfigGetUserSettingsParams {

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

  /**
   * Parameters for booksMyconfigReleaseDownloadAccess
   */
  export interface BooksMyconfigReleaseDownloadAccessParams {

    /**
     * The volume(s) to release restrictions for.
     */
    volumeIds: Array<string>;

    /**
     * The device/version ID from which to release the restriction.
     */
    cpksver: string;

    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;

    /**
     * String to identify the originator of this request.
     */
    source?: string;

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
     * ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     */
    locale?: string;

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

  /**
   * Parameters for booksMyconfigRequestAccess
   */
  export interface BooksMyconfigRequestAccessParams {

    /**
     * The volume to request concurrent/download restrictions for.
     */
    volumeId: string;

    /**
     * String to identify the originator of this request.
     */
    source: string;

    /**
     * The client nonce value.
     */
    nonce: string;

    /**
     * The device/version ID from which to request the restrictions.
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
     * ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     */
    locale?: string;

    /**
     * The type of access license to request. If not specified, the default is BOTH.
     */
    licenseTypes?: 'BOTH' | 'CONCURRENT' | 'DOWNLOAD';

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

  /**
   * Parameters for booksMyconfigSyncVolumeLicenses
   */
  export interface BooksMyconfigSyncVolumeLicensesParams {

    /**
     * String to identify the originator of this request.
     */
    source: string;

    /**
     * The client nonce value.
     */
    nonce: string;

    /**
     * The device/version ID from which to release the restriction.
     */
    cpksver: string;

    /**
     * The volume(s) to request download restrictions for.
     */
    volumeIds?: Array<string>;

    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;

    /**
     * Set to true to show pre-ordered books. Defaults to false.
     */
    showPreorders?: boolean;

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
     * ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     */
    locale?: string;

    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;

    /**
     * Set to true to include non-comics series. Defaults to false.
     */
    includeNonComicsSeries?: boolean;

    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;

    /**
     * List of features supported by the client, i.e., 'RENTALS'
     */
    features?: Array<'RENTALS'>;

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }

  /**
   * Parameters for booksMyconfigUpdateUserSettings
   */
  export interface BooksMyconfigUpdateUserSettingsParams {

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
    body?: Usersettings;

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }
}

export { MyconfigService }
