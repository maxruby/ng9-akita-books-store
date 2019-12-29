/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Discoveryclusters } from '../models/discoveryclusters';
@Injectable({
  providedIn: 'root',
})
class PersonalizedstreamService extends __BaseService {
  static readonly booksPersonalizedstreamGetPath = '/personalizedstream/get';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns a stream of personalized book clusters
   * @param params The `PersonalizedstreamService.BooksPersonalizedstreamGetParams` containing the following parameters:
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
   * - `maxAllowedMaturityRating`: The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
   *
   * - `locale`: ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksPersonalizedstreamGetResponse(params: PersonalizedstreamService.BooksPersonalizedstreamGetParams): __Observable<__StrictHttpResponse<Discoveryclusters>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.maxAllowedMaturityRating != null) __params = __params.set('maxAllowedMaturityRating', params.maxAllowedMaturityRating.toString());
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/personalizedstream/get`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Discoveryclusters>;
      })
    );
  }
  /**
   * Returns a stream of personalized book clusters
   * @param params The `PersonalizedstreamService.BooksPersonalizedstreamGetParams` containing the following parameters:
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
   * - `maxAllowedMaturityRating`: The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
   *
   * - `locale`: ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksPersonalizedstreamGet(params: PersonalizedstreamService.BooksPersonalizedstreamGetParams): __Observable<Discoveryclusters> {
    return this.booksPersonalizedstreamGetResponse(params).pipe(
      __map(_r => _r.body as Discoveryclusters)
    );
  }
}

module PersonalizedstreamService {

  /**
   * Parameters for booksPersonalizedstreamGet
   */
  export interface BooksPersonalizedstreamGetParams {

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
     * The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     */
    maxAllowedMaturityRating?: 'mature' | 'not-mature';

    /**
     * ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
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
}

export { PersonalizedstreamService }
