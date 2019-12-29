/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Bookshelves } from '../models/bookshelves';
import { Bookshelf } from '../models/bookshelf';
import { Volumes } from '../models/volumes';
@Injectable({
  providedIn: 'root',
})
class BookshelvesService extends __BaseService {
  static readonly booksBookshelvesListPath = '/users/{userId}/bookshelves';
  static readonly booksBookshelvesGetPath = '/users/{userId}/bookshelves/{shelf}';
  static readonly booksBookshelvesVolumesListPath = '/users/{userId}/bookshelves/{shelf}/volumes';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Retrieves a list of public bookshelves for the specified user.
   * @param params The `BookshelvesService.BooksBookshelvesListParams` containing the following parameters:
   *
   * - `userId`: ID of user for whom to retrieve bookshelves.
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
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksBookshelvesListResponse(params: BookshelvesService.BooksBookshelvesListParams): __Observable<__StrictHttpResponse<Bookshelves>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/${params.userId}/bookshelves`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Bookshelves>;
      })
    );
  }
  /**
   * Retrieves a list of public bookshelves for the specified user.
   * @param params The `BookshelvesService.BooksBookshelvesListParams` containing the following parameters:
   *
   * - `userId`: ID of user for whom to retrieve bookshelves.
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
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksBookshelvesList(params: BookshelvesService.BooksBookshelvesListParams): __Observable<Bookshelves> {
    return this.booksBookshelvesListResponse(params).pipe(
      __map(_r => _r.body as Bookshelves)
    );
  }

  /**
   * Retrieves metadata for a specific bookshelf for the specified user.
   * @param params The `BookshelvesService.BooksBookshelvesGetParams` containing the following parameters:
   *
   * - `userId`: ID of user for whom to retrieve bookshelves.
   *
   * - `shelf`: ID of bookshelf to retrieve.
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
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksBookshelvesGetResponse(params: BookshelvesService.BooksBookshelvesGetParams): __Observable<__StrictHttpResponse<Bookshelf>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/${params.userId}/bookshelves/${params.shelf}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Bookshelf>;
      })
    );
  }
  /**
   * Retrieves metadata for a specific bookshelf for the specified user.
   * @param params The `BookshelvesService.BooksBookshelvesGetParams` containing the following parameters:
   *
   * - `userId`: ID of user for whom to retrieve bookshelves.
   *
   * - `shelf`: ID of bookshelf to retrieve.
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
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksBookshelvesGet(params: BookshelvesService.BooksBookshelvesGetParams): __Observable<Bookshelf> {
    return this.booksBookshelvesGetResponse(params).pipe(
      __map(_r => _r.body as Bookshelf)
    );
  }

  /**
   * Retrieves volumes in a specific bookshelf for the specified user.
   * @param params The `BookshelvesService.BooksBookshelvesVolumesListParams` containing the following parameters:
   *
   * - `userId`: ID of user for whom to retrieve bookshelf volumes.
   *
   * - `shelf`: ID of bookshelf to retrieve volumes.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `startIndex`: Index of the first element to return (starts at 0)
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `showPreorders`: Set to true to show pre-ordered books. Defaults to false.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `maxResults`: Maximum number of results to return
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksBookshelvesVolumesListResponse(params: BookshelvesService.BooksBookshelvesVolumesListParams): __Observable<__StrictHttpResponse<Volumes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.startIndex != null) __params = __params.set('startIndex', params.startIndex.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.showPreorders != null) __params = __params.set('showPreorders', params.showPreorders.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.maxResults != null) __params = __params.set('maxResults', params.maxResults.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/${params.userId}/bookshelves/${params.shelf}/volumes`,
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
   * Retrieves volumes in a specific bookshelf for the specified user.
   * @param params The `BookshelvesService.BooksBookshelvesVolumesListParams` containing the following parameters:
   *
   * - `userId`: ID of user for whom to retrieve bookshelf volumes.
   *
   * - `shelf`: ID of bookshelf to retrieve volumes.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `startIndex`: Index of the first element to return (starts at 0)
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `showPreorders`: Set to true to show pre-ordered books. Defaults to false.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `maxResults`: Maximum number of results to return
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksBookshelvesVolumesList(params: BookshelvesService.BooksBookshelvesVolumesListParams): __Observable<Volumes> {
    return this.booksBookshelvesVolumesListResponse(params).pipe(
      __map(_r => _r.body as Volumes)
    );
  }
}

module BookshelvesService {

  /**
   * Parameters for booksBookshelvesList
   */
  export interface BooksBookshelvesListParams {

    /**
     * ID of user for whom to retrieve bookshelves.
     */
    userId: string;

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
   * Parameters for booksBookshelvesGet
   */
  export interface BooksBookshelvesGetParams {

    /**
     * ID of user for whom to retrieve bookshelves.
     */
    userId: string;

    /**
     * ID of bookshelf to retrieve.
     */
    shelf: string;

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
   * Parameters for booksBookshelvesVolumesList
   */
  export interface BooksBookshelvesVolumesListParams {

    /**
     * ID of user for whom to retrieve bookshelf volumes.
     */
    userId: string;

    /**
     * ID of bookshelf to retrieve volumes.
     */
    shelf: string;

    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;

    /**
     * Index of the first element to return (starts at 0)
     */
    startIndex?: number;

    /**
     * String to identify the originator of this request.
     */
    source?: string;

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
     * Maximum number of results to return
     */
    maxResults?: number;

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

export { BookshelvesService }
