/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Category } from '../models/category';
import { Volume2 } from '../models/volume-2';
@Injectable({
  providedIn: 'root',
})
class OnboardingService extends __BaseService {
  static readonly booksOnboardingListCategoriesPath = '/onboarding/listCategories';
  static readonly booksOnboardingListCategoryVolumesPath = '/onboarding/listCategoryVolumes';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List categories for onboarding experience.
   * @param params The `OnboardingService.BooksOnboardingListCategoriesParams` containing the following parameters:
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `locale`: ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksOnboardingListCategoriesResponse(params: OnboardingService.BooksOnboardingListCategoriesParams): __Observable<__StrictHttpResponse<Category>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onboarding/listCategories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Category>;
      })
    );
  }
  /**
   * List categories for onboarding experience.
   * @param params The `OnboardingService.BooksOnboardingListCategoriesParams` containing the following parameters:
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `locale`: ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksOnboardingListCategories(params: OnboardingService.BooksOnboardingListCategoriesParams): __Observable<Category> {
    return this.booksOnboardingListCategoriesResponse(params).pipe(
      __map(_r => _r.body as Category)
    );
  }

  /**
   * List available volumes under categories for onboarding experience.
   * @param params The `OnboardingService.BooksOnboardingListCategoryVolumesParams` containing the following parameters:
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `pageToken`: The value of the nextToken from the previous page.
   *
   * - `pageSize`: Number of maximum results per page to be included in the response.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `maxAllowedMaturityRating`: The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.
   *
   * - `locale`: ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `categoryId`: List of category ids requested.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksOnboardingListCategoryVolumesResponse(params: OnboardingService.BooksOnboardingListCategoryVolumesParams): __Observable<__StrictHttpResponse<Volume2>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.pageToken != null) __params = __params.set('pageToken', params.pageToken.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.maxAllowedMaturityRating != null) __params = __params.set('maxAllowedMaturityRating', params.maxAllowedMaturityRating.toString());
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    (params.categoryId || []).forEach(val => {if (val != null) __params = __params.append('categoryId', val.toString())});
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onboarding/listCategoryVolumes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Volume2>;
      })
    );
  }
  /**
   * List available volumes under categories for onboarding experience.
   * @param params The `OnboardingService.BooksOnboardingListCategoryVolumesParams` containing the following parameters:
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `pageToken`: The value of the nextToken from the previous page.
   *
   * - `pageSize`: Number of maximum results per page to be included in the response.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `maxAllowedMaturityRating`: The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.
   *
   * - `locale`: ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `categoryId`: List of category ids requested.
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksOnboardingListCategoryVolumes(params: OnboardingService.BooksOnboardingListCategoryVolumesParams): __Observable<Volume2> {
    return this.booksOnboardingListCategoryVolumesResponse(params).pipe(
      __map(_r => _r.body as Volume2)
    );
  }
}

module OnboardingService {

  /**
   * Parameters for booksOnboardingListCategories
   */
  export interface BooksOnboardingListCategoriesParams {

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
     * ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
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
   * Parameters for booksOnboardingListCategoryVolumes
   */
  export interface BooksOnboardingListCategoryVolumesParams {

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
     * The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.
     */
    maxAllowedMaturityRating?: 'mature' | 'not-mature';

    /**
     * ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
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
     * List of category ids requested.
     */
    categoryId?: Array<string>;

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }
}

export { OnboardingService }
