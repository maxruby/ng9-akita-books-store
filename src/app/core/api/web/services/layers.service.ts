/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Volumeannotations } from '../models/volumeannotations';
import { Volumeannotation } from '../models/volumeannotation';
import { Annotationsdata } from '../models/annotationsdata';
import { Annotationdata } from '../models/annotationdata';
import { Layersummaries } from '../models/layersummaries';
import { Layersummary } from '../models/layersummary';
@Injectable({
  providedIn: 'root',
})
class LayersService extends __BaseService {
  static readonly booksLayersVolumeAnnotationsListPath = '/volumes/{volumeId}/layers/{layerId}';
  static readonly booksLayersVolumeAnnotationsGetPath = '/volumes/{volumeId}/layers/{layerId}/annotations/{annotationId}';
  static readonly booksLayersAnnotationDataListPath = '/volumes/{volumeId}/layers/{layerId}/data';
  static readonly booksLayersAnnotationDataGetPath = '/volumes/{volumeId}/layers/{layerId}/data/{annotationDataId}';
  static readonly booksLayersListPath = '/volumes/{volumeId}/layersummary';
  static readonly booksLayersGetPath = '/volumes/{volumeId}/layersummary/{summaryId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Gets the volume annotations for a volume and layer.
   * @param params The `LayersService.BooksLayersVolumeAnnotationsListParams` containing the following parameters:
   *
   * - `volumeId`: The volume to retrieve annotations for.
   *
   * - `layerId`: The ID for the layer to get the annotations.
   *
   * - `contentVersion`: The content version for the requested volume.
   *
   * - `volumeAnnotationsVersion`: The version of the volume annotations that you are requesting.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `updatedMin`: RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
   *
   * - `updatedMax`: RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
   *
   * - `startPosition`: The start position to start retrieving data from.
   *
   * - `startOffset`: The start offset to start retrieving data from.
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
   * - `locale`: The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `endPosition`: The end position to end retrieving data from.
   *
   * - `endOffset`: The end offset to end retrieving data from.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksLayersVolumeAnnotationsListResponse(params: LayersService.BooksLayersVolumeAnnotationsListParams): __Observable<__StrictHttpResponse<Volumeannotations>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.contentVersion != null) __params = __params.set('contentVersion', params.contentVersion.toString());
    if (params.volumeAnnotationsVersion != null) __params = __params.set('volumeAnnotationsVersion', params.volumeAnnotationsVersion.toString());
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.updatedMin != null) __params = __params.set('updatedMin', params.updatedMin.toString());
    if (params.updatedMax != null) __params = __params.set('updatedMax', params.updatedMax.toString());
    if (params.startPosition != null) __params = __params.set('startPosition', params.startPosition.toString());
    if (params.startOffset != null) __params = __params.set('startOffset', params.startOffset.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.showDeleted != null) __params = __params.set('showDeleted', params.showDeleted.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.pageToken != null) __params = __params.set('pageToken', params.pageToken.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.maxResults != null) __params = __params.set('maxResults', params.maxResults.toString());
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.endPosition != null) __params = __params.set('endPosition', params.endPosition.toString());
    if (params.endOffset != null) __params = __params.set('endOffset', params.endOffset.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/volumes/${params.volumeId}/layers/${params.layerId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Volumeannotations>;
      })
    );
  }
  /**
   * Gets the volume annotations for a volume and layer.
   * @param params The `LayersService.BooksLayersVolumeAnnotationsListParams` containing the following parameters:
   *
   * - `volumeId`: The volume to retrieve annotations for.
   *
   * - `layerId`: The ID for the layer to get the annotations.
   *
   * - `contentVersion`: The content version for the requested volume.
   *
   * - `volumeAnnotationsVersion`: The version of the volume annotations that you are requesting.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `updatedMin`: RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
   *
   * - `updatedMax`: RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
   *
   * - `startPosition`: The start position to start retrieving data from.
   *
   * - `startOffset`: The start offset to start retrieving data from.
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
   * - `locale`: The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `endPosition`: The end position to end retrieving data from.
   *
   * - `endOffset`: The end offset to end retrieving data from.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksLayersVolumeAnnotationsList(params: LayersService.BooksLayersVolumeAnnotationsListParams): __Observable<Volumeannotations> {
    return this.booksLayersVolumeAnnotationsListResponse(params).pipe(
      __map(_r => _r.body as Volumeannotations)
    );
  }

  /**
   * Gets the volume annotation.
   * @param params The `LayersService.BooksLayersVolumeAnnotationsGetParams` containing the following parameters:
   *
   * - `volumeId`: The volume to retrieve annotations for.
   *
   * - `layerId`: The ID for the layer to get the annotations.
   *
   * - `annotationId`: The ID of the volume annotation to retrieve.
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
   * - `locale`: The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksLayersVolumeAnnotationsGetResponse(params: LayersService.BooksLayersVolumeAnnotationsGetParams): __Observable<__StrictHttpResponse<Volumeannotation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



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
      'GET',
      this.rootUrl + `/volumes/${params.volumeId}/layers/${params.layerId}/annotations/${params.annotationId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Volumeannotation>;
      })
    );
  }
  /**
   * Gets the volume annotation.
   * @param params The `LayersService.BooksLayersVolumeAnnotationsGetParams` containing the following parameters:
   *
   * - `volumeId`: The volume to retrieve annotations for.
   *
   * - `layerId`: The ID for the layer to get the annotations.
   *
   * - `annotationId`: The ID of the volume annotation to retrieve.
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
   * - `locale`: The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksLayersVolumeAnnotationsGet(params: LayersService.BooksLayersVolumeAnnotationsGetParams): __Observable<Volumeannotation> {
    return this.booksLayersVolumeAnnotationsGetResponse(params).pipe(
      __map(_r => _r.body as Volumeannotation)
    );
  }

  /**
   * Gets the annotation data for a volume and layer.
   * @param params The `LayersService.BooksLayersAnnotationDataListParams` containing the following parameters:
   *
   * - `volumeId`: The volume to retrieve annotation data for.
   *
   * - `layerId`: The ID for the layer to get the annotation data.
   *
   * - `contentVersion`: The content version for the requested volume.
   *
   * - `w`: The requested pixel width for any images. If width is provided height must also be provided.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `updatedMin`: RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
   *
   * - `updatedMax`: RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `scale`: The requested scale for the image.
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
   * - `locale`: The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `h`: The requested pixel height for any images. If height is provided width must also be provided.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `annotationDataId`: The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksLayersAnnotationDataListResponse(params: LayersService.BooksLayersAnnotationDataListParams): __Observable<__StrictHttpResponse<Annotationsdata>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.contentVersion != null) __params = __params.set('contentVersion', params.contentVersion.toString());
    if (params.w != null) __params = __params.set('w', params.w.toString());
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.updatedMin != null) __params = __params.set('updatedMin', params.updatedMin.toString());
    if (params.updatedMax != null) __params = __params.set('updatedMax', params.updatedMax.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.scale != null) __params = __params.set('scale', params.scale.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.pageToken != null) __params = __params.set('pageToken', params.pageToken.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.maxResults != null) __params = __params.set('maxResults', params.maxResults.toString());
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.h != null) __params = __params.set('h', params.h.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    (params.annotationDataId || []).forEach(val => {if (val != null) __params = __params.append('annotationDataId', val.toString())});
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/volumes/${params.volumeId}/layers/${params.layerId}/data`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Annotationsdata>;
      })
    );
  }
  /**
   * Gets the annotation data for a volume and layer.
   * @param params The `LayersService.BooksLayersAnnotationDataListParams` containing the following parameters:
   *
   * - `volumeId`: The volume to retrieve annotation data for.
   *
   * - `layerId`: The ID for the layer to get the annotation data.
   *
   * - `contentVersion`: The content version for the requested volume.
   *
   * - `w`: The requested pixel width for any images. If width is provided height must also be provided.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `updatedMin`: RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
   *
   * - `updatedMax`: RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `scale`: The requested scale for the image.
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
   * - `locale`: The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `h`: The requested pixel height for any images. If height is provided width must also be provided.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `annotationDataId`: The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksLayersAnnotationDataList(params: LayersService.BooksLayersAnnotationDataListParams): __Observable<Annotationsdata> {
    return this.booksLayersAnnotationDataListResponse(params).pipe(
      __map(_r => _r.body as Annotationsdata)
    );
  }

  /**
   * Gets the annotation data.
   * @param params The `LayersService.BooksLayersAnnotationDataGetParams` containing the following parameters:
   *
   * - `volumeId`: The volume to retrieve annotations for.
   *
   * - `layerId`: The ID for the layer to get the annotations.
   *
   * - `contentVersion`: The content version for the volume you are trying to retrieve.
   *
   * - `annotationDataId`: The ID of the annotation data to retrieve.
   *
   * - `w`: The requested pixel width for any images. If width is provided height must also be provided.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `scale`: The requested scale for the image.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `locale`: The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `h`: The requested pixel height for any images. If height is provided width must also be provided.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * - `allowWebDefinitions`: For the dictionary layer. Whether or not to allow web definitions.
   *
   * @return Successful response
   */
  booksLayersAnnotationDataGetResponse(params: LayersService.BooksLayersAnnotationDataGetParams): __Observable<__StrictHttpResponse<Annotationdata>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.contentVersion != null) __params = __params.set('contentVersion', params.contentVersion.toString());

    if (params.w != null) __params = __params.set('w', params.w.toString());
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.scale != null) __params = __params.set('scale', params.scale.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.h != null) __params = __params.set('h', params.h.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    if (params.allowWebDefinitions != null) __params = __params.set('allowWebDefinitions', params.allowWebDefinitions.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/volumes/${params.volumeId}/layers/${params.layerId}/data/${params.annotationDataId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Annotationdata>;
      })
    );
  }
  /**
   * Gets the annotation data.
   * @param params The `LayersService.BooksLayersAnnotationDataGetParams` containing the following parameters:
   *
   * - `volumeId`: The volume to retrieve annotations for.
   *
   * - `layerId`: The ID for the layer to get the annotations.
   *
   * - `contentVersion`: The content version for the volume you are trying to retrieve.
   *
   * - `annotationDataId`: The ID of the annotation data to retrieve.
   *
   * - `w`: The requested pixel width for any images. If width is provided height must also be provided.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `source`: String to identify the originator of this request.
   *
   * - `scale`: The requested scale for the image.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `locale`: The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `h`: The requested pixel height for any images. If height is provided width must also be provided.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * - `allowWebDefinitions`: For the dictionary layer. Whether or not to allow web definitions.
   *
   * @return Successful response
   */
  booksLayersAnnotationDataGet(params: LayersService.BooksLayersAnnotationDataGetParams): __Observable<Annotationdata> {
    return this.booksLayersAnnotationDataGetResponse(params).pipe(
      __map(_r => _r.body as Annotationdata)
    );
  }

  /**
   * List the layer summaries for a volume.
   * @param params The `LayersService.BooksLayersListParams` containing the following parameters:
   *
   * - `volumeId`: The volume to retrieve layers for.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `source`: String to identify the originator of this request.
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
  booksLayersListResponse(params: LayersService.BooksLayersListParams): __Observable<__StrictHttpResponse<Layersummaries>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.source != null) __params = __params.set('source', params.source.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.pageToken != null) __params = __params.set('pageToken', params.pageToken.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.maxResults != null) __params = __params.set('maxResults', params.maxResults.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.contentVersion != null) __params = __params.set('contentVersion', params.contentVersion.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/volumes/${params.volumeId}/layersummary`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Layersummaries>;
      })
    );
  }
  /**
   * List the layer summaries for a volume.
   * @param params The `LayersService.BooksLayersListParams` containing the following parameters:
   *
   * - `volumeId`: The volume to retrieve layers for.
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `source`: String to identify the originator of this request.
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
  booksLayersList(params: LayersService.BooksLayersListParams): __Observable<Layersummaries> {
    return this.booksLayersListResponse(params).pipe(
      __map(_r => _r.body as Layersummaries)
    );
  }

  /**
   * Gets the layer summary for a volume.
   * @param params The `LayersService.BooksLayersGetParams` containing the following parameters:
   *
   * - `volumeId`: The volume to retrieve layers for.
   *
   * - `summaryId`: The ID for the layer to get the summary for.
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
   * - `contentVersion`: The content version for the requested volume.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksLayersGetResponse(params: LayersService.BooksLayersGetParams): __Observable<__StrictHttpResponse<Layersummary>> {
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
      this.rootUrl + `/volumes/${params.volumeId}/layersummary/${params.summaryId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Layersummary>;
      })
    );
  }
  /**
   * Gets the layer summary for a volume.
   * @param params The `LayersService.BooksLayersGetParams` containing the following parameters:
   *
   * - `volumeId`: The volume to retrieve layers for.
   *
   * - `summaryId`: The ID for the layer to get the summary for.
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
   * - `contentVersion`: The content version for the requested volume.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksLayersGet(params: LayersService.BooksLayersGetParams): __Observable<Layersummary> {
    return this.booksLayersGetResponse(params).pipe(
      __map(_r => _r.body as Layersummary)
    );
  }
}

module LayersService {

  /**
   * Parameters for booksLayersVolumeAnnotationsList
   */
  export interface BooksLayersVolumeAnnotationsListParams {

    /**
     * The volume to retrieve annotations for.
     */
    volumeId: string;

    /**
     * The ID for the layer to get the annotations.
     */
    layerId: string;

    /**
     * The content version for the requested volume.
     */
    contentVersion: string;

    /**
     * The version of the volume annotations that you are requesting.
     */
    volumeAnnotationsVersion?: string;

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
     * The start position to start retrieving data from.
     */
    startPosition?: string;

    /**
     * The start offset to start retrieving data from.
     */
    startOffset?: string;

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
     * The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
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
     * The end position to end retrieving data from.
     */
    endPosition?: string;

    /**
     * The end offset to end retrieving data from.
     */
    endOffset?: string;

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }

  /**
   * Parameters for booksLayersVolumeAnnotationsGet
   */
  export interface BooksLayersVolumeAnnotationsGetParams {

    /**
     * The volume to retrieve annotations for.
     */
    volumeId: string;

    /**
     * The ID for the layer to get the annotations.
     */
    layerId: string;

    /**
     * The ID of the volume annotation to retrieve.
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
     * The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
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
   * Parameters for booksLayersAnnotationDataList
   */
  export interface BooksLayersAnnotationDataListParams {

    /**
     * The volume to retrieve annotation data for.
     */
    volumeId: string;

    /**
     * The ID for the layer to get the annotation data.
     */
    layerId: string;

    /**
     * The content version for the requested volume.
     */
    contentVersion: string;

    /**
     * The requested pixel width for any images. If width is provided height must also be provided.
     */
    w?: number;

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
     * The requested scale for the image.
     */
    scale?: number;

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
     * The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     */
    locale?: string;

    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;

    /**
     * The requested pixel height for any images. If height is provided width must also be provided.
     */
    h?: number;

    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;

    /**
     * The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.
     */
    annotationDataId?: Array<string>;

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }

  /**
   * Parameters for booksLayersAnnotationDataGet
   */
  export interface BooksLayersAnnotationDataGetParams {

    /**
     * The volume to retrieve annotations for.
     */
    volumeId: string;

    /**
     * The ID for the layer to get the annotations.
     */
    layerId: string;

    /**
     * The content version for the volume you are trying to retrieve.
     */
    contentVersion: string;

    /**
     * The ID of the annotation data to retrieve.
     */
    annotationDataId: string;

    /**
     * The requested pixel width for any images. If width is provided height must also be provided.
     */
    w?: number;

    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;

    /**
     * String to identify the originator of this request.
     */
    source?: string;

    /**
     * The requested scale for the image.
     */
    scale?: number;

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
     * The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     */
    locale?: string;

    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;

    /**
     * The requested pixel height for any images. If height is provided width must also be provided.
     */
    h?: number;

    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;

    /**
     * Data format for the response.
     */
    alt?: 'json';

    /**
     * For the dictionary layer. Whether or not to allow web definitions.
     */
    allowWebDefinitions?: boolean;
  }

  /**
   * Parameters for booksLayersList
   */
  export interface BooksLayersListParams {

    /**
     * The volume to retrieve layers for.
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
   * Parameters for booksLayersGet
   */
  export interface BooksLayersGetParams {

    /**
     * The volume to retrieve layers for.
     */
    volumeId: string;

    /**
     * The ID for the layer to get the summary for.
     */
    summaryId: string;

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
     * The content version for the requested volume.
     */
    contentVersion?: string;

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }
}

export { LayersService }
