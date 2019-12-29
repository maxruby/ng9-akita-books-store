/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Series } from '../models/series';
import { Seriesmembership } from '../models/seriesmembership';
@Injectable({
  providedIn: 'root',
})
class SeriesService extends __BaseService {
  static readonly booksSeriesGetPath = '/series/get';
  static readonly booksSeriesMembershipGetPath = '/series/membership/get';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns Series metadata for the given series ids.
   * @param params The `SeriesService.BooksSeriesGetParams` containing the following parameters:
   *
   * - `series_id`: String that identifies the series
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
  booksSeriesGetResponse(params: SeriesService.BooksSeriesGetParams): __Observable<__StrictHttpResponse<Series>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.seriesId || []).forEach(val => {if (val != null) __params = __params.append('series_id', val.toString())});
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/series/get`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Series>;
      })
    );
  }
  /**
   * Returns Series metadata for the given series ids.
   * @param params The `SeriesService.BooksSeriesGetParams` containing the following parameters:
   *
   * - `series_id`: String that identifies the series
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
  booksSeriesGet(params: SeriesService.BooksSeriesGetParams): __Observable<Series> {
    return this.booksSeriesGetResponse(params).pipe(
      __map(_r => _r.body as Series)
    );
  }

  /**
   * Returns Series membership data given the series id.
   * @param params The `SeriesService.BooksSeriesMembershipGetParams` containing the following parameters:
   *
   * - `series_id`: String that identifies the series
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `page_token`: The value of the nextToken from the previous page.
   *
   * - `page_size`: Number of maximum results per page to be included in the response.
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
  booksSeriesMembershipGetResponse(params: SeriesService.BooksSeriesMembershipGetParams): __Observable<__StrictHttpResponse<Seriesmembership>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.seriesId != null) __params = __params.set('series_id', params.seriesId.toString());
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.pageToken != null) __params = __params.set('page_token', params.pageToken.toString());
    if (params.pageSize != null) __params = __params.set('page_size', params.pageSize.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/series/membership/get`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Seriesmembership>;
      })
    );
  }
  /**
   * Returns Series membership data given the series id.
   * @param params The `SeriesService.BooksSeriesMembershipGetParams` containing the following parameters:
   *
   * - `series_id`: String that identifies the series
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `page_token`: The value of the nextToken from the previous page.
   *
   * - `page_size`: Number of maximum results per page to be included in the response.
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
  booksSeriesMembershipGet(params: SeriesService.BooksSeriesMembershipGetParams): __Observable<Seriesmembership> {
    return this.booksSeriesMembershipGetResponse(params).pipe(
      __map(_r => _r.body as Seriesmembership)
    );
  }
}

module SeriesService {

  /**
   * Parameters for booksSeriesGet
   */
  export interface BooksSeriesGetParams {

    /**
     * String that identifies the series
     */
    seriesId: Array<string>;

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
   * Parameters for booksSeriesMembershipGet
   */
  export interface BooksSeriesMembershipGetParams {

    /**
     * String that identifies the series
     */
    seriesId: string;

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
     * The value of the nextToken from the previous page.
     */
    pageToken?: string;

    /**
     * Number of maximum results per page to be included in the response.
     */
    pageSize?: number;

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

export { SeriesService }
