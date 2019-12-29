/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Annotations } from '../models/annotations';
import { Annotation } from '../models/annotation';
import { AnnotationsSummary } from '../models/annotations-summary';
import { Bookshelves } from '../models/bookshelves';
import { Bookshelf } from '../models/bookshelf';
import { Volumes } from '../models/volumes';
import { ReadingPosition } from '../models/reading-position';
@Injectable({
  providedIn: 'root',
})
class MylibraryService extends __BaseService {
  static readonly booksMylibraryAnnotationsListPath = '/mylibrary/annotations';
  static readonly booksMylibraryAnnotationsInsertPath = '/mylibrary/annotations';
  static readonly booksMylibraryAnnotationsSummaryPath = '/mylibrary/annotations/summary';
  static readonly booksMylibraryAnnotationsDeletePath = '/mylibrary/annotations/{annotationId}';
  static readonly booksMylibraryAnnotationsUpdatePath = '/mylibrary/annotations/{annotationId}';
  static readonly booksMylibraryBookshelvesListPath = '/mylibrary/bookshelves';
  static readonly booksMylibraryBookshelvesGetPath = '/mylibrary/bookshelves/{shelf}';
  static readonly booksMylibraryBookshelvesAddVolumePath = '/mylibrary/bookshelves/{shelf}/addVolume';
  static readonly booksMylibraryBookshelvesClearVolumesPath = '/mylibrary/bookshelves/{shelf}/clearVolumes';
  static readonly booksMylibraryBookshelvesMoveVolumePath = '/mylibrary/bookshelves/{shelf}/moveVolume';
  static readonly booksMylibraryBookshelvesRemoveVolumePath = '/mylibrary/bookshelves/{shelf}/removeVolume';
  static readonly booksMylibraryBookshelvesVolumesListPath = '/mylibrary/bookshelves/{shelf}/volumes';
  static readonly booksMylibraryReadingpositionsGetPath = '/mylibrary/readingpositions/{volumeId}';
  static readonly booksMylibraryReadingpositionsSetPositionPath = '/mylibrary/readingpositions/{volumeId}/setPosition';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Retrieves a list of annotations, possibly filtered.
   * @param params The `MylibraryService.BooksMylibraryAnnotationsListParams` containing the following parameters:
   *
   * - `volumeId`: The volume to restrict annotations to.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `updatedMin`: RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
   *
   * - `updatedMax`: RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `showDeleted`: Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `pageToken`: The value of the nextToken from the previous page.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `maxResults`: Maximum number of results to return
   *
   * - `layerIds`: The layer ID(s) to limit annotation by.
   *
   * - `layerId`: The layer ID to limit annotation by.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `contentVersion`: The content version for the requested volume.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksMylibraryAnnotationsListResponse(params: MylibraryService.BooksMylibraryAnnotationsListParams): __Observable<__StrictHttpResponse<Annotations>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.volumeId != null) __params = __params.set('volumeId', params.volumeId.toString());
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.updatedMin != null) __params = __params.set('updatedMin', params.updatedMin.toString());
    if (params.updatedMax != null) __params = __params.set('updatedMax', params.updatedMax.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.showDeleted != null) __params = __params.set('showDeleted', params.showDeleted.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.pageToken != null) __params = __params.set('pageToken', params.pageToken.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.maxResults != null) __params = __params.set('maxResults', params.maxResults.toString());
    (params.layerIds || []).forEach(val => {if (val != null) __params = __params.append('layerIds', val.toString())});
    if (params.layerId != null) __params = __params.set('layerId', params.layerId.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.contentVersion != null) __params = __params.set('contentVersion', params.contentVersion.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/mylibrary/annotations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Annotations>;
      })
    );
  }
  /**
   * Retrieves a list of annotations, possibly filtered.
   * @param params The `MylibraryService.BooksMylibraryAnnotationsListParams` containing the following parameters:
   *
   * - `volumeId`: The volume to restrict annotations to.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `updatedMin`: RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
   *
   * - `updatedMax`: RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `showDeleted`: Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `pageToken`: The value of the nextToken from the previous page.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `maxResults`: Maximum number of results to return
   *
   * - `layerIds`: The layer ID(s) to limit annotation by.
   *
   * - `layerId`: The layer ID to limit annotation by.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `contentVersion`: The content version for the requested volume.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksMylibraryAnnotationsList(params: MylibraryService.BooksMylibraryAnnotationsListParams): __Observable<Annotations> {
    return this.booksMylibraryAnnotationsListResponse(params).pipe(
      __map(_r => _r.body as Annotations)
    );
  }

  /**
   * Inserts a new annotation.
   * @param params The `MylibraryService.BooksMylibraryAnnotationsInsertParams` containing the following parameters:
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `showOnlySummaryInResponse`: Requests that only the summary of the specified layer be provided in the response.
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
   * - `country`: ISO-3166-1 code to override the IP-based location.
   *
   * - `body`:
   *
   * - `annotationId`: The ID for the annotation to insert.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksMylibraryAnnotationsInsertResponse(params: MylibraryService.BooksMylibraryAnnotationsInsertParams): __Observable<__StrictHttpResponse<Annotation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.showOnlySummaryInResponse != null) __params = __params.set('showOnlySummaryInResponse', params.showOnlySummaryInResponse.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.country != null) __params = __params.set('country', params.country.toString());
    __body = params.body;
    if (params.annotationId != null) __params = __params.set('annotationId', params.annotationId.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/mylibrary/annotations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Annotation>;
      })
    );
  }
  /**
   * Inserts a new annotation.
   * @param params The `MylibraryService.BooksMylibraryAnnotationsInsertParams` containing the following parameters:
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `showOnlySummaryInResponse`: Requests that only the summary of the specified layer be provided in the response.
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
   * - `country`: ISO-3166-1 code to override the IP-based location.
   *
   * - `body`:
   *
   * - `annotationId`: The ID for the annotation to insert.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksMylibraryAnnotationsInsert(params: MylibraryService.BooksMylibraryAnnotationsInsertParams): __Observable<Annotation> {
    return this.booksMylibraryAnnotationsInsertResponse(params).pipe(
      __map(_r => _r.body as Annotation)
    );
  }

  /**
   * Gets the summary of specified layers.
   * @param params The `MylibraryService.BooksMylibraryAnnotationsSummaryParams` containing the following parameters:
   *
   * - `volumeId`: Volume id to get the summary for.
   *
   * - `layerIds`: Array of layer IDs to get the summary for.
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
  booksMylibraryAnnotationsSummaryResponse(params: MylibraryService.BooksMylibraryAnnotationsSummaryParams): __Observable<__StrictHttpResponse<AnnotationsSummary>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.volumeId != null) __params = __params.set('volumeId', params.volumeId.toString());
    (params.layerIds || []).forEach(val => {if (val != null) __params = __params.append('layerIds', val.toString())});
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/mylibrary/annotations/summary`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AnnotationsSummary>;
      })
    );
  }
  /**
   * Gets the summary of specified layers.
   * @param params The `MylibraryService.BooksMylibraryAnnotationsSummaryParams` containing the following parameters:
   *
   * - `volumeId`: Volume id to get the summary for.
   *
   * - `layerIds`: Array of layer IDs to get the summary for.
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
  booksMylibraryAnnotationsSummary(params: MylibraryService.BooksMylibraryAnnotationsSummaryParams): __Observable<AnnotationsSummary> {
    return this.booksMylibraryAnnotationsSummaryResponse(params).pipe(
      __map(_r => _r.body as AnnotationsSummary)
    );
  }

  /**
   * Deletes an annotation.
   * @param params The `MylibraryService.BooksMylibraryAnnotationsDeleteParams` containing the following parameters:
   *
   * - `annotationId`: The ID for the annotation to delete.
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
   */
  booksMylibraryAnnotationsDeleteResponse(params: MylibraryService.BooksMylibraryAnnotationsDeleteParams): __Observable<__StrictHttpResponse<null>> {
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
      'DELETE',
      this.rootUrl + `/mylibrary/annotations/${params.annotationId}`,
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
   * Deletes an annotation.
   * @param params The `MylibraryService.BooksMylibraryAnnotationsDeleteParams` containing the following parameters:
   *
   * - `annotationId`: The ID for the annotation to delete.
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
   */
  booksMylibraryAnnotationsDelete(params: MylibraryService.BooksMylibraryAnnotationsDeleteParams): __Observable<null> {
    return this.booksMylibraryAnnotationsDeleteResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates an existing annotation.
   * @param params The `MylibraryService.BooksMylibraryAnnotationsUpdateParams` containing the following parameters:
   *
   * - `annotationId`: The ID for the annotation to update.
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
   * - `body`:
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksMylibraryAnnotationsUpdateResponse(params: MylibraryService.BooksMylibraryAnnotationsUpdateParams): __Observable<__StrictHttpResponse<Annotation>> {
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
    __body = params.body;
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/mylibrary/annotations/${params.annotationId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Annotation>;
      })
    );
  }
  /**
   * Updates an existing annotation.
   * @param params The `MylibraryService.BooksMylibraryAnnotationsUpdateParams` containing the following parameters:
   *
   * - `annotationId`: The ID for the annotation to update.
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
   * - `body`:
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksMylibraryAnnotationsUpdate(params: MylibraryService.BooksMylibraryAnnotationsUpdateParams): __Observable<Annotation> {
    return this.booksMylibraryAnnotationsUpdateResponse(params).pipe(
      __map(_r => _r.body as Annotation)
    );
  }

  /**
   * Retrieves a list of bookshelves belonging to the authenticated user.
   * @param params The `MylibraryService.BooksMylibraryBookshelvesListParams` containing the following parameters:
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
  booksMylibraryBookshelvesListResponse(params: MylibraryService.BooksMylibraryBookshelvesListParams): __Observable<__StrictHttpResponse<Bookshelves>> {
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
      this.rootUrl + `/mylibrary/bookshelves`,
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
   * Retrieves a list of bookshelves belonging to the authenticated user.
   * @param params The `MylibraryService.BooksMylibraryBookshelvesListParams` containing the following parameters:
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
  booksMylibraryBookshelvesList(params: MylibraryService.BooksMylibraryBookshelvesListParams): __Observable<Bookshelves> {
    return this.booksMylibraryBookshelvesListResponse(params).pipe(
      __map(_r => _r.body as Bookshelves)
    );
  }

  /**
   * Retrieves metadata for a specific bookshelf belonging to the authenticated user.
   * @param params The `MylibraryService.BooksMylibraryBookshelvesGetParams` containing the following parameters:
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
  booksMylibraryBookshelvesGetResponse(params: MylibraryService.BooksMylibraryBookshelvesGetParams): __Observable<__StrictHttpResponse<Bookshelf>> {
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
      this.rootUrl + `/mylibrary/bookshelves/${params.shelf}`,
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
   * Retrieves metadata for a specific bookshelf belonging to the authenticated user.
   * @param params The `MylibraryService.BooksMylibraryBookshelvesGetParams` containing the following parameters:
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
  booksMylibraryBookshelvesGet(params: MylibraryService.BooksMylibraryBookshelvesGetParams): __Observable<Bookshelf> {
    return this.booksMylibraryBookshelvesGetResponse(params).pipe(
      __map(_r => _r.body as Bookshelf)
    );
  }

  /**
   * Adds a volume to a bookshelf.
   * @param params The `MylibraryService.BooksMylibraryBookshelvesAddVolumeParams` containing the following parameters:
   *
   * - `volumeId`: ID of volume to add.
   *
   * - `shelf`: ID of bookshelf to which to add a volume.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `reason`: The reason for which the book is added to the library.
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
  booksMylibraryBookshelvesAddVolumeResponse(params: MylibraryService.BooksMylibraryBookshelvesAddVolumeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.volumeId != null) __params = __params.set('volumeId', params.volumeId.toString());

    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.reason != null) __params = __params.set('reason', params.reason.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/mylibrary/bookshelves/${params.shelf}/addVolume`,
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
   * Adds a volume to a bookshelf.
   * @param params The `MylibraryService.BooksMylibraryBookshelvesAddVolumeParams` containing the following parameters:
   *
   * - `volumeId`: ID of volume to add.
   *
   * - `shelf`: ID of bookshelf to which to add a volume.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `reason`: The reason for which the book is added to the library.
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
  booksMylibraryBookshelvesAddVolume(params: MylibraryService.BooksMylibraryBookshelvesAddVolumeParams): __Observable<null> {
    return this.booksMylibraryBookshelvesAddVolumeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Clears all volumes from a bookshelf.
   * @param params The `MylibraryService.BooksMylibraryBookshelvesClearVolumesParams` containing the following parameters:
   *
   * - `shelf`: ID of bookshelf from which to remove a volume.
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
   */
  booksMylibraryBookshelvesClearVolumesResponse(params: MylibraryService.BooksMylibraryBookshelvesClearVolumesParams): __Observable<__StrictHttpResponse<null>> {
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
      'POST',
      this.rootUrl + `/mylibrary/bookshelves/${params.shelf}/clearVolumes`,
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
   * Clears all volumes from a bookshelf.
   * @param params The `MylibraryService.BooksMylibraryBookshelvesClearVolumesParams` containing the following parameters:
   *
   * - `shelf`: ID of bookshelf from which to remove a volume.
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
   */
  booksMylibraryBookshelvesClearVolumes(params: MylibraryService.BooksMylibraryBookshelvesClearVolumesParams): __Observable<null> {
    return this.booksMylibraryBookshelvesClearVolumesResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Moves a volume within a bookshelf.
   * @param params The `MylibraryService.BooksMylibraryBookshelvesMoveVolumeParams` containing the following parameters:
   *
   * - `volumePosition`: Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)
   *
   * - `volumeId`: ID of volume to move.
   *
   * - `shelf`: ID of bookshelf with the volume.
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
   */
  booksMylibraryBookshelvesMoveVolumeResponse(params: MylibraryService.BooksMylibraryBookshelvesMoveVolumeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.volumePosition != null) __params = __params.set('volumePosition', params.volumePosition.toString());
    if (params.volumeId != null) __params = __params.set('volumeId', params.volumeId.toString());

    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/mylibrary/bookshelves/${params.shelf}/moveVolume`,
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
   * Moves a volume within a bookshelf.
   * @param params The `MylibraryService.BooksMylibraryBookshelvesMoveVolumeParams` containing the following parameters:
   *
   * - `volumePosition`: Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)
   *
   * - `volumeId`: ID of volume to move.
   *
   * - `shelf`: ID of bookshelf with the volume.
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
   */
  booksMylibraryBookshelvesMoveVolume(params: MylibraryService.BooksMylibraryBookshelvesMoveVolumeParams): __Observable<null> {
    return this.booksMylibraryBookshelvesMoveVolumeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Removes a volume from a bookshelf.
   * @param params The `MylibraryService.BooksMylibraryBookshelvesRemoveVolumeParams` containing the following parameters:
   *
   * - `volumeId`: ID of volume to remove.
   *
   * - `shelf`: ID of bookshelf from which to remove a volume.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `reason`: The reason for which the book is removed from the library.
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
  booksMylibraryBookshelvesRemoveVolumeResponse(params: MylibraryService.BooksMylibraryBookshelvesRemoveVolumeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.volumeId != null) __params = __params.set('volumeId', params.volumeId.toString());

    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.reason != null) __params = __params.set('reason', params.reason.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/mylibrary/bookshelves/${params.shelf}/removeVolume`,
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
   * Removes a volume from a bookshelf.
   * @param params The `MylibraryService.BooksMylibraryBookshelvesRemoveVolumeParams` containing the following parameters:
   *
   * - `volumeId`: ID of volume to remove.
   *
   * - `shelf`: ID of bookshelf from which to remove a volume.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `reason`: The reason for which the book is removed from the library.
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
  booksMylibraryBookshelvesRemoveVolume(params: MylibraryService.BooksMylibraryBookshelvesRemoveVolumeParams): __Observable<null> {
    return this.booksMylibraryBookshelvesRemoveVolumeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Gets volume information for volumes on a bookshelf.
   * @param params The `MylibraryService.BooksMylibraryBookshelvesVolumesListParams` containing the following parameters:
   *
   * - `shelf`: The bookshelf ID or name retrieve volumes for.
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
   * - `q`: Full-text search query string in this bookshelf.
   *
   * - `projection`: Restrict information returned to a set of selected fields.
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
   * - `country`: ISO-3166-1 code to override the IP-based location.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksMylibraryBookshelvesVolumesListResponse(params: MylibraryService.BooksMylibraryBookshelvesVolumesListParams): __Observable<__StrictHttpResponse<Volumes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.startIndex != null) __params = __params.set('startIndex', params.startIndex.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.showPreorders != null) __params = __params.set('showPreorders', params.showPreorders.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.projection != null) __params = __params.set('projection', params.projection.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.maxResults != null) __params = __params.set('maxResults', params.maxResults.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.country != null) __params = __params.set('country', params.country.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/mylibrary/bookshelves/${params.shelf}/volumes`,
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
   * Gets volume information for volumes on a bookshelf.
   * @param params The `MylibraryService.BooksMylibraryBookshelvesVolumesListParams` containing the following parameters:
   *
   * - `shelf`: The bookshelf ID or name retrieve volumes for.
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
   * - `q`: Full-text search query string in this bookshelf.
   *
   * - `projection`: Restrict information returned to a set of selected fields.
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
   * - `country`: ISO-3166-1 code to override the IP-based location.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksMylibraryBookshelvesVolumesList(params: MylibraryService.BooksMylibraryBookshelvesVolumesListParams): __Observable<Volumes> {
    return this.booksMylibraryBookshelvesVolumesListResponse(params).pipe(
      __map(_r => _r.body as Volumes)
    );
  }

  /**
   * Retrieves my reading position information for a volume.
   * @param params The `MylibraryService.BooksMylibraryReadingpositionsGetParams` containing the following parameters:
   *
   * - `volumeId`: ID of volume for which to retrieve a reading position.
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
   * - `contentVersion`: Volume content version for which this reading position is requested.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksMylibraryReadingpositionsGetResponse(params: MylibraryService.BooksMylibraryReadingpositionsGetParams): __Observable<__StrictHttpResponse<ReadingPosition>> {
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
    if (params.contentVersion != null) __params = __params.set('contentVersion', params.contentVersion.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/mylibrary/readingpositions/${params.volumeId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReadingPosition>;
      })
    );
  }
  /**
   * Retrieves my reading position information for a volume.
   * @param params The `MylibraryService.BooksMylibraryReadingpositionsGetParams` containing the following parameters:
   *
   * - `volumeId`: ID of volume for which to retrieve a reading position.
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
   * - `contentVersion`: Volume content version for which this reading position is requested.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksMylibraryReadingpositionsGet(params: MylibraryService.BooksMylibraryReadingpositionsGetParams): __Observable<ReadingPosition> {
    return this.booksMylibraryReadingpositionsGetResponse(params).pipe(
      __map(_r => _r.body as ReadingPosition)
    );
  }

  /**
   * Sets my reading position information for a volume.
   * @param params The `MylibraryService.BooksMylibraryReadingpositionsSetPositionParams` containing the following parameters:
   *
   * - `volumeId`: ID of volume for which to update the reading position.
   *
   * - `timestamp`: RFC 3339 UTC format timestamp associated with this reading position.
   *
   * - `position`: Position string for the new volume reading position.
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
   * - `deviceCookie`: Random persistent device cookie optional on set position.
   *
   * - `contentVersion`: Volume content version for which this reading position applies.
   *
   * - `alt`: Data format for the response.
   *
   * - `action`: Action that caused this reading position to be set.
   */
  booksMylibraryReadingpositionsSetPositionResponse(params: MylibraryService.BooksMylibraryReadingpositionsSetPositionParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.timestamp != null) __params = __params.set('timestamp', params.timestamp.toString());
    if (params.position != null) __params = __params.set('position', params.position.toString());
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.deviceCookie != null) __params = __params.set('deviceCookie', params.deviceCookie.toString());
    if (params.contentVersion != null) __params = __params.set('contentVersion', params.contentVersion.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    if (params.action != null) __params = __params.set('action', params.action.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/mylibrary/readingpositions/${params.volumeId}/setPosition`,
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
   * Sets my reading position information for a volume.
   * @param params The `MylibraryService.BooksMylibraryReadingpositionsSetPositionParams` containing the following parameters:
   *
   * - `volumeId`: ID of volume for which to update the reading position.
   *
   * - `timestamp`: RFC 3339 UTC format timestamp associated with this reading position.
   *
   * - `position`: Position string for the new volume reading position.
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
   * - `deviceCookie`: Random persistent device cookie optional on set position.
   *
   * - `contentVersion`: Volume content version for which this reading position applies.
   *
   * - `alt`: Data format for the response.
   *
   * - `action`: Action that caused this reading position to be set.
   */
  booksMylibraryReadingpositionsSetPosition(params: MylibraryService.BooksMylibraryReadingpositionsSetPositionParams): __Observable<null> {
    return this.booksMylibraryReadingpositionsSetPositionResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module MylibraryService {

  /**
   * Parameters for booksMylibraryAnnotationsList
   */
  export interface BooksMylibraryAnnotationsListParams {

    /**
     * The volume to restrict annotations to.
     */
    volumeId?: string;

    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;

    /**
     * RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
     */
    updatedMin?: string;

    /**
     * RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
     */
    updatedMax?: string;

    /**
     * String to identify the originator of this request.
     */
    source?: string;

    /**
     * Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
     */
    showDeleted?: boolean;

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
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;

    /**
     * Maximum number of results to return
     */
    maxResults?: number;

    /**
     * The layer ID(s) to limit annotation by.
     */
    layerIds?: Array<string>;

    /**
     * The layer ID to limit annotation by.
     */
    layerId?: string;

    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;

    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;

    /**
     * The content version for the requested volume.
     */
    contentVersion?: string;

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }

  /**
   * Parameters for booksMylibraryAnnotationsInsert
   */
  export interface BooksMylibraryAnnotationsInsertParams {

    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;

    /**
     * String to identify the originator of this request.
     */
    source?: string;

    /**
     * Requests that only the summary of the specified layer be provided in the response.
     */
    showOnlySummaryInResponse?: boolean;

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
     * ISO-3166-1 code to override the IP-based location.
     */
    country?: string;
    body?: Annotation;

    /**
     * The ID for the annotation to insert.
     */
    annotationId?: string;

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }

  /**
   * Parameters for booksMylibraryAnnotationsSummary
   */
  export interface BooksMylibraryAnnotationsSummaryParams {

    /**
     * Volume id to get the summary for.
     */
    volumeId: string;

    /**
     * Array of layer IDs to get the summary for.
     */
    layerIds: Array<string>;

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
   * Parameters for booksMylibraryAnnotationsDelete
   */
  export interface BooksMylibraryAnnotationsDeleteParams {

    /**
     * The ID for the annotation to delete.
     */
    annotationId: string;

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
   * Parameters for booksMylibraryAnnotationsUpdate
   */
  export interface BooksMylibraryAnnotationsUpdateParams {

    /**
     * The ID for the annotation to update.
     */
    annotationId: string;

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
    body?: Annotation;

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }

  /**
   * Parameters for booksMylibraryBookshelvesList
   */
  export interface BooksMylibraryBookshelvesListParams {

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
   * Parameters for booksMylibraryBookshelvesGet
   */
  export interface BooksMylibraryBookshelvesGetParams {

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
   * Parameters for booksMylibraryBookshelvesAddVolume
   */
  export interface BooksMylibraryBookshelvesAddVolumeParams {

    /**
     * ID of volume to add.
     */
    volumeId: string;

    /**
     * ID of bookshelf to which to add a volume.
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
     * The reason for which the book is added to the library.
     */
    reason?: 'IOS_PREX' | 'IOS_SEARCH' | 'ONBOARDING';

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
   * Parameters for booksMylibraryBookshelvesClearVolumes
   */
  export interface BooksMylibraryBookshelvesClearVolumesParams {

    /**
     * ID of bookshelf from which to remove a volume.
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
   * Parameters for booksMylibraryBookshelvesMoveVolume
   */
  export interface BooksMylibraryBookshelvesMoveVolumeParams {

    /**
     * Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)
     */
    volumePosition: number;

    /**
     * ID of volume to move.
     */
    volumeId: string;

    /**
     * ID of bookshelf with the volume.
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
   * Parameters for booksMylibraryBookshelvesRemoveVolume
   */
  export interface BooksMylibraryBookshelvesRemoveVolumeParams {

    /**
     * ID of volume to remove.
     */
    volumeId: string;

    /**
     * ID of bookshelf from which to remove a volume.
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
     * The reason for which the book is removed from the library.
     */
    reason?: 'ONBOARDING';

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
   * Parameters for booksMylibraryBookshelvesVolumesList
   */
  export interface BooksMylibraryBookshelvesVolumesListParams {

    /**
     * The bookshelf ID or name retrieve volumes for.
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
     * Full-text search query string in this bookshelf.
     */
    q?: string;

    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: 'full' | 'lite';

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
     * ISO-3166-1 code to override the IP-based location.
     */
    country?: string;

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }

  /**
   * Parameters for booksMylibraryReadingpositionsGet
   */
  export interface BooksMylibraryReadingpositionsGetParams {

    /**
     * ID of volume for which to retrieve a reading position.
     */
    volumeId: string;

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
     * Volume content version for which this reading position is requested.
     */
    contentVersion?: string;

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }

  /**
   * Parameters for booksMylibraryReadingpositionsSetPosition
   */
  export interface BooksMylibraryReadingpositionsSetPositionParams {

    /**
     * ID of volume for which to update the reading position.
     */
    volumeId: string;

    /**
     * RFC 3339 UTC format timestamp associated with this reading position.
     */
    timestamp: string;

    /**
     * Position string for the new volume reading position.
     */
    position: string;

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
     * Random persistent device cookie optional on set position.
     */
    deviceCookie?: string;

    /**
     * Volume content version for which this reading position applies.
     */
    contentVersion?: string;

    /**
     * Data format for the response.
     */
    alt?: 'json';

    /**
     * Action that caused this reading position to be set.
     */
    action?: 'bookmark' | 'chapter' | 'next-page' | 'prev-page' | 'scroll' | 'search';
  }
}

export { MylibraryService }
