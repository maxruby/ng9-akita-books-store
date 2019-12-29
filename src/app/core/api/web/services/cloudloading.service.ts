/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BooksCloudloadingResource } from '../models/books-cloudloading-resource';
@Injectable({
  providedIn: 'root',
})
class CloudloadingService extends __BaseService {
  static readonly booksCloudloadingAddBookPath = '/cloudloading/addBook';
  static readonly booksCloudloadingDeleteBookPath = '/cloudloading/deleteBook';
  static readonly booksCloudloadingUpdateBookPath = '/cloudloading/updateBook';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `CloudloadingService.BooksCloudloadingAddBookParams` containing the following parameters:
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `upload_client_token`:
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `name`: The document name. It can be set only if the drive_document_id is set.
   *
   * - `mime_type`: The document MIME type. It can be set only if the drive_document_id is set.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `drive_document_id`: A drive document id. The upload_client_token must not be set.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksCloudloadingAddBookResponse(params: CloudloadingService.BooksCloudloadingAddBookParams): __Observable<__StrictHttpResponse<BooksCloudloadingResource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.uploadClientToken != null) __params = __params.set('upload_client_token', params.uploadClientToken.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.mimeType != null) __params = __params.set('mime_type', params.mimeType.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.driveDocumentId != null) __params = __params.set('drive_document_id', params.driveDocumentId.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/cloudloading/addBook`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BooksCloudloadingResource>;
      })
    );
  }
  /**
   * @param params The `CloudloadingService.BooksCloudloadingAddBookParams` containing the following parameters:
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `upload_client_token`:
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `name`: The document name. It can be set only if the drive_document_id is set.
   *
   * - `mime_type`: The document MIME type. It can be set only if the drive_document_id is set.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `drive_document_id`: A drive document id. The upload_client_token must not be set.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksCloudloadingAddBook(params: CloudloadingService.BooksCloudloadingAddBookParams): __Observable<BooksCloudloadingResource> {
    return this.booksCloudloadingAddBookResponse(params).pipe(
      __map(_r => _r.body as BooksCloudloadingResource)
    );
  }

  /**
   * Remove the book and its contents
   * @param params The `CloudloadingService.BooksCloudloadingDeleteBookParams` containing the following parameters:
   *
   * - `volumeId`: The id of the book to be removed.
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
   */
  booksCloudloadingDeleteBookResponse(params: CloudloadingService.BooksCloudloadingDeleteBookParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.volumeId != null) __params = __params.set('volumeId', params.volumeId.toString());
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/cloudloading/deleteBook`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Remove the book and its contents
   * @param params The `CloudloadingService.BooksCloudloadingDeleteBookParams` containing the following parameters:
   *
   * - `volumeId`: The id of the book to be removed.
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
   */
  booksCloudloadingDeleteBook(params: CloudloadingService.BooksCloudloadingDeleteBookParams): __Observable<null> {
    return this.booksCloudloadingDeleteBookResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CloudloadingService.BooksCloudloadingUpdateBookParams` containing the following parameters:
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
  booksCloudloadingUpdateBookResponse(params: CloudloadingService.BooksCloudloadingUpdateBookParams): __Observable<__StrictHttpResponse<BooksCloudloadingResource>> {
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
      this.rootUrl + `/cloudloading/updateBook`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BooksCloudloadingResource>;
      })
    );
  }
  /**
   * @param params The `CloudloadingService.BooksCloudloadingUpdateBookParams` containing the following parameters:
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
  booksCloudloadingUpdateBook(params: CloudloadingService.BooksCloudloadingUpdateBookParams): __Observable<BooksCloudloadingResource> {
    return this.booksCloudloadingUpdateBookResponse(params).pipe(
      __map(_r => _r.body as BooksCloudloadingResource)
    );
  }
}

module CloudloadingService {

  /**
   * Parameters for booksCloudloadingAddBook
   */
  export interface BooksCloudloadingAddBookParams {

    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    uploadClientToken?: string;

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
     * The document name. It can be set only if the drive_document_id is set.
     */
    name?: string;

    /**
     * The document MIME type. It can be set only if the drive_document_id is set.
     */
    mimeType?: string;

    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;

    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;

    /**
     * A drive document id. The upload_client_token must not be set.
     */
    driveDocumentId?: string;

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }

  /**
   * Parameters for booksCloudloadingDeleteBook
   */
  export interface BooksCloudloadingDeleteBookParams {

    /**
     * The id of the book to be removed.
     */
    volumeId: string;

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
   * Parameters for booksCloudloadingUpdateBook
   */
  export interface BooksCloudloadingUpdateBookParams {

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
    body?: BooksCloudloadingResource;

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }
}

export { CloudloadingService }
