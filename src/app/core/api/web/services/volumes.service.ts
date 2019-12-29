/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Volumes } from '../models/volumes';
import { BooksVolumesRecommendedRateResponse } from '../models/books-volumes-recommended-rate-response';
import { Volume } from '../models/volume';
@Injectable({
  providedIn: 'root',
})
class VolumesService extends __BaseService {
  static readonly booksVolumesListPath = '/volumes';
  static readonly booksVolumesMybooksListPath = '/volumes/mybooks';
  static readonly booksVolumesRecommendedListPath = '/volumes/recommended';
  static readonly booksVolumesRecommendedRatePath = '/volumes/recommended/rate';
  static readonly booksVolumesUseruploadedListPath = '/volumes/useruploaded';
  static readonly booksVolumesGetPath = '/volumes/{volumeId}';
  static readonly booksVolumesAssociatedListPath = '/volumes/{volumeId}/associated';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Performs a book search.
   * @param params The `VolumesService.BooksVolumesListParams` containing the following parameters:
   *
   * - `q`: Full-text search query string.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `startIndex`: Index of the first result to return (starts at 0)
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `showPreorders`: Set to true to show books available for preorder. Defaults to false.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `projection`: Restrict information returned to a set of selected fields.
   *
   * - `printType`: Restrict to books or magazines.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `partner`: Restrict and brand results for partner ID.
   *
   * - `orderBy`: Sort search results.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `maxResults`: Maximum number of results to return.
   *
   * - `maxAllowedMaturityRating`: The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
   *
   * - `libraryRestrict`: Restrict search to this user's library.
   *
   * - `langRestrict`: Restrict results to books with this language code.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `filter`: Filter search results.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `download`: Restrict to volumes by download availability.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksVolumesListResponse(params: VolumesService.BooksVolumesListParams): __Observable<__StrictHttpResponse<Volumes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.startIndex != null) __params = __params.set('startIndex', params.startIndex.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.showPreorders != null) __params = __params.set('showPreorders', params.showPreorders.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.projection != null) __params = __params.set('projection', params.projection.toString());
    if (params.printType != null) __params = __params.set('printType', params.printType.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.partner != null) __params = __params.set('partner', params.partner.toString());
    if (params.orderBy != null) __params = __params.set('orderBy', params.orderBy.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.maxResults != null) __params = __params.set('maxResults', params.maxResults.toString());
    if (params.maxAllowedMaturityRating != null) __params = __params.set('maxAllowedMaturityRating', params.maxAllowedMaturityRating.toString());
    if (params.libraryRestrict != null) __params = __params.set('libraryRestrict', params.libraryRestrict.toString());
    if (params.langRestrict != null) __params = __params.set('langRestrict', params.langRestrict.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.filter != null) __params = __params.set('filter', params.filter.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.download != null) __params = __params.set('download', params.download.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/volumes`,
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
   * Performs a book search.
   * @param params The `VolumesService.BooksVolumesListParams` containing the following parameters:
   *
   * - `q`: Full-text search query string.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `startIndex`: Index of the first result to return (starts at 0)
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `showPreorders`: Set to true to show books available for preorder. Defaults to false.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `projection`: Restrict information returned to a set of selected fields.
   *
   * - `printType`: Restrict to books or magazines.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `partner`: Restrict and brand results for partner ID.
   *
   * - `orderBy`: Sort search results.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `maxResults`: Maximum number of results to return.
   *
   * - `maxAllowedMaturityRating`: The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
   *
   * - `libraryRestrict`: Restrict search to this user's library.
   *
   * - `langRestrict`: Restrict results to books with this language code.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `filter`: Filter search results.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `download`: Restrict to volumes by download availability.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksVolumesList(params: VolumesService.BooksVolumesListParams): __Observable<Volumes> {
    return this.booksVolumesListResponse(params).pipe(
      __map(_r => _r.body as Volumes)
    );
  }

  /**
   * Return a list of books in My Library.
   * @param params The `VolumesService.BooksVolumesMybooksListParams` containing the following parameters:
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `startIndex`: Index of the first result to return (starts at 0)
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `processingState`: The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `maxResults`: Maximum number of results to return.
   *
   * - `locale`: ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `country`: ISO-3166-1 code to override the IP-based location.
   *
   * - `alt`: Data format for the response.
   *
   * - `acquireMethod`: How the book was acquired
   *
   * @return Successful response
   */
  booksVolumesMybooksListResponse(params: VolumesService.BooksVolumesMybooksListParams): __Observable<__StrictHttpResponse<Volumes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.startIndex != null) __params = __params.set('startIndex', params.startIndex.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    (params.processingState || []).forEach(val => {if (val != null) __params = __params.append('processingState', val.toString())});
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.maxResults != null) __params = __params.set('maxResults', params.maxResults.toString());
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.country != null) __params = __params.set('country', params.country.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    (params.acquireMethod || []).forEach(val => {if (val != null) __params = __params.append('acquireMethod', val.toString())});
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/volumes/mybooks`,
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
   * Return a list of books in My Library.
   * @param params The `VolumesService.BooksVolumesMybooksListParams` containing the following parameters:
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `startIndex`: Index of the first result to return (starts at 0)
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `processingState`: The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `maxResults`: Maximum number of results to return.
   *
   * - `locale`: ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `country`: ISO-3166-1 code to override the IP-based location.
   *
   * - `alt`: Data format for the response.
   *
   * - `acquireMethod`: How the book was acquired
   *
   * @return Successful response
   */
  booksVolumesMybooksList(params: VolumesService.BooksVolumesMybooksListParams): __Observable<Volumes> {
    return this.booksVolumesMybooksListResponse(params).pipe(
      __map(_r => _r.body as Volumes)
    );
  }

  /**
   * Return a list of recommended books for the current user.
   * @param params The `VolumesService.BooksVolumesRecommendedListParams` containing the following parameters:
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
  booksVolumesRecommendedListResponse(params: VolumesService.BooksVolumesRecommendedListParams): __Observable<__StrictHttpResponse<Volumes>> {
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
      this.rootUrl + `/volumes/recommended`,
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
   * Return a list of recommended books for the current user.
   * @param params The `VolumesService.BooksVolumesRecommendedListParams` containing the following parameters:
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
  booksVolumesRecommendedList(params: VolumesService.BooksVolumesRecommendedListParams): __Observable<Volumes> {
    return this.booksVolumesRecommendedListResponse(params).pipe(
      __map(_r => _r.body as Volumes)
    );
  }

  /**
   * Rate a recommended book for the current user.
   * @param params The `VolumesService.BooksVolumesRecommendedRateParams` containing the following parameters:
   *
   * - `volumeId`: ID of the source volume.
   *
   * - `rating`: Rating to be given to the volume.
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
  booksVolumesRecommendedRateResponse(params: VolumesService.BooksVolumesRecommendedRateParams): __Observable<__StrictHttpResponse<BooksVolumesRecommendedRateResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.volumeId != null) __params = __params.set('volumeId', params.volumeId.toString());
    if (params.rating != null) __params = __params.set('rating', params.rating.toString());
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
      this.rootUrl + `/volumes/recommended/rate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BooksVolumesRecommendedRateResponse>;
      })
    );
  }
  /**
   * Rate a recommended book for the current user.
   * @param params The `VolumesService.BooksVolumesRecommendedRateParams` containing the following parameters:
   *
   * - `volumeId`: ID of the source volume.
   *
   * - `rating`: Rating to be given to the volume.
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
  booksVolumesRecommendedRate(params: VolumesService.BooksVolumesRecommendedRateParams): __Observable<BooksVolumesRecommendedRateResponse> {
    return this.booksVolumesRecommendedRateResponse(params).pipe(
      __map(_r => _r.body as BooksVolumesRecommendedRateResponse)
    );
  }

  /**
   * Return a list of books uploaded by the current user.
   * @param params The `VolumesService.BooksVolumesUseruploadedListParams` containing the following parameters:
   *
   * - `volumeId`: The ids of the volumes to be returned. If not specified all that match the processingState are returned.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `startIndex`: Index of the first result to return (starts at 0)
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `processingState`: The processing state of the user uploaded volumes to be returned.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `maxResults`: Maximum number of results to return.
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
  booksVolumesUseruploadedListResponse(params: VolumesService.BooksVolumesUseruploadedListParams): __Observable<__StrictHttpResponse<Volumes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.volumeId || []).forEach(val => {if (val != null) __params = __params.append('volumeId', val.toString())});
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.startIndex != null) __params = __params.set('startIndex', params.startIndex.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    (params.processingState || []).forEach(val => {if (val != null) __params = __params.append('processingState', val.toString())});
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.maxResults != null) __params = __params.set('maxResults', params.maxResults.toString());
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/volumes/useruploaded`,
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
   * Return a list of books uploaded by the current user.
   * @param params The `VolumesService.BooksVolumesUseruploadedListParams` containing the following parameters:
   *
   * - `volumeId`: The ids of the volumes to be returned. If not specified all that match the processingState are returned.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `startIndex`: Index of the first result to return (starts at 0)
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `processingState`: The processing state of the user uploaded volumes to be returned.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `maxResults`: Maximum number of results to return.
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
  booksVolumesUseruploadedList(params: VolumesService.BooksVolumesUseruploadedListParams): __Observable<Volumes> {
    return this.booksVolumesUseruploadedListResponse(params).pipe(
      __map(_r => _r.body as Volumes)
    );
  }

  /**
   * Gets volume information for a single volume.
   * @param params The `VolumesService.BooksVolumesGetParams` containing the following parameters:
   *
   * - `volumeId`: ID of volume to retrieve.
   *
   * - `user_library_consistent_read`:
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `projection`: Restrict information returned to a set of selected fields.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `partner`: Brand results for partner ID.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `includeNonComicsSeries`: Set to true to include non-comics series. Defaults to false.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `country`: ISO-3166-1 code to override the IP-based location.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksVolumesGetResponse(params: VolumesService.BooksVolumesGetParams): __Observable<__StrictHttpResponse<Volume>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.userLibraryConsistentRead != null) __params = __params.set('user_library_consistent_read', params.userLibraryConsistentRead.toString());
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.projection != null) __params = __params.set('projection', params.projection.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.partner != null) __params = __params.set('partner', params.partner.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.includeNonComicsSeries != null) __params = __params.set('includeNonComicsSeries', params.includeNonComicsSeries.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.country != null) __params = __params.set('country', params.country.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/volumes/${params.volumeId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Volume>;
      })
    );
  }
  /**
   * Gets volume information for a single volume.
   * @param params The `VolumesService.BooksVolumesGetParams` containing the following parameters:
   *
   * - `volumeId`: ID of volume to retrieve.
   *
   * - `user_library_consistent_read`:
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `projection`: Restrict information returned to a set of selected fields.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `partner`: Brand results for partner ID.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `includeNonComicsSeries`: Set to true to include non-comics series. Defaults to false.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `country`: ISO-3166-1 code to override the IP-based location.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksVolumesGet(params: VolumesService.BooksVolumesGetParams): __Observable<Volume> {
    return this.booksVolumesGetResponse(params).pipe(
      __map(_r => _r.body as Volume)
    );
  }

  /**
   * Return a list of associated books.
   * @param params The `VolumesService.BooksVolumesAssociatedListParams` containing the following parameters:
   *
   * - `volumeId`: ID of the source volume.
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
   * - `association`: Association type.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksVolumesAssociatedListResponse(params: VolumesService.BooksVolumesAssociatedListParams): __Observable<__StrictHttpResponse<Volumes>> {
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
    if (params.association != null) __params = __params.set('association', params.association.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/volumes/${params.volumeId}/associated`,
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
   * Return a list of associated books.
   * @param params The `VolumesService.BooksVolumesAssociatedListParams` containing the following parameters:
   *
   * - `volumeId`: ID of the source volume.
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
   * - `association`: Association type.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksVolumesAssociatedList(params: VolumesService.BooksVolumesAssociatedListParams): __Observable<Volumes> {
    return this.booksVolumesAssociatedListResponse(params).pipe(
      __map(_r => _r.body as Volumes)
    );
  }
}

module VolumesService {

  /**
   * Parameters for booksVolumesList
   */
  export interface BooksVolumesListParams {

    /**
     * Full-text search query string.
     */
    q: string;

    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;

    /**
     * Index of the first result to return (starts at 0)
     */
    startIndex?: number;

    /**
     * String to identify the originator of this request.
     */
    source?: string;

    /**
     * Set to true to show books available for preorder. Defaults to false.
     */
    showPreorders?: boolean;

    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;

    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: 'full' | 'lite';

    /**
     * Restrict to books or magazines.
     */
    printType?: 'all' | 'books' | 'magazines';

    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;

    /**
     * Restrict and brand results for partner ID.
     */
    partner?: string;

    /**
     * Sort search results.
     */
    orderBy?: 'newest' | 'relevance';

    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;

    /**
     * Maximum number of results to return.
     */
    maxResults?: number;

    /**
     * The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     */
    maxAllowedMaturityRating?: 'mature' | 'not-mature';

    /**
     * Restrict search to this user's library.
     */
    libraryRestrict?: 'my-library' | 'no-restrict';

    /**
     * Restrict results to books with this language code.
     */
    langRestrict?: string;

    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;

    /**
     * Filter search results.
     */
    filter?: 'ebooks' | 'free-ebooks' | 'full' | 'paid-ebooks' | 'partial';

    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;

    /**
     * Restrict to volumes by download availability.
     */
    download?: 'epub';

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }

  /**
   * Parameters for booksVolumesMybooksList
   */
  export interface BooksVolumesMybooksListParams {

    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;

    /**
     * Index of the first result to return (starts at 0)
     */
    startIndex?: number;

    /**
     * String to identify the originator of this request.
     */
    source?: string;

    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;

    /**
     * The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
     */
    processingState?: Array<'COMPLETED_FAILED' | 'COMPLETED_SUCCESS' | 'RUNNING'>;

    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;

    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;

    /**
     * Maximum number of results to return.
     */
    maxResults?: number;

    /**
     * ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
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
     * ISO-3166-1 code to override the IP-based location.
     */
    country?: string;

    /**
     * Data format for the response.
     */
    alt?: 'json';

    /**
     * How the book was acquired
     */
    acquireMethod?: Array<'FAMILY_SHARED' | 'PREORDERED' | 'PREVIOUSLY_RENTED' | 'PUBLIC_DOMAIN' | 'PURCHASED' | 'RENTED' | 'SAMPLE' | 'UPLOADED'>;
  }

  /**
   * Parameters for booksVolumesRecommendedList
   */
  export interface BooksVolumesRecommendedListParams {

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

  /**
   * Parameters for booksVolumesRecommendedRate
   */
  export interface BooksVolumesRecommendedRateParams {

    /**
     * ID of the source volume.
     */
    volumeId: string;

    /**
     * Rating to be given to the volume.
     */
    rating: 'HAVE_IT' | 'NOT_INTERESTED';

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

  /**
   * Parameters for booksVolumesUseruploadedList
   */
  export interface BooksVolumesUseruploadedListParams {

    /**
     * The ids of the volumes to be returned. If not specified all that match the processingState are returned.
     */
    volumeId?: Array<string>;

    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;

    /**
     * Index of the first result to return (starts at 0)
     */
    startIndex?: number;

    /**
     * String to identify the originator of this request.
     */
    source?: string;

    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;

    /**
     * The processing state of the user uploaded volumes to be returned.
     */
    processingState?: Array<'COMPLETED_FAILED' | 'COMPLETED_SUCCESS' | 'RUNNING'>;

    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;

    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;

    /**
     * Maximum number of results to return.
     */
    maxResults?: number;

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

  /**
   * Parameters for booksVolumesGet
   */
  export interface BooksVolumesGetParams {

    /**
     * ID of volume to retrieve.
     */
    volumeId: string;
    userLibraryConsistentRead?: boolean;

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
     * Restrict information returned to a set of selected fields.
     */
    projection?: 'full' | 'lite';

    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;

    /**
     * Brand results for partner ID.
     */
    partner?: string;

    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;

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
     * ISO-3166-1 code to override the IP-based location.
     */
    country?: string;

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }

  /**
   * Parameters for booksVolumesAssociatedList
   */
  export interface BooksVolumesAssociatedListParams {

    /**
     * ID of the source volume.
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
     * Association type.
     */
    association?: 'end-of-sample' | 'end-of-volume' | 'related-for-play';

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }
}

export { VolumesService }
