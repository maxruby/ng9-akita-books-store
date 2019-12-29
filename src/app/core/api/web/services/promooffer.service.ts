/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Offers } from '../models/offers';
@Injectable({
  providedIn: 'root',
})
class PromoofferService extends __BaseService {
  static readonly booksPromoofferAcceptPath = '/promooffer/accept';
  static readonly booksPromoofferDismissPath = '/promooffer/dismiss';
  static readonly booksPromoofferGetPath = '/promooffer/get';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `PromoofferService.BooksPromoofferAcceptParams` containing the following parameters:
   *
   * - `volumeId`: Volume id to exercise the offer
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `serial`: device serial
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `product`: device product
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `offerId`:
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `model`: device model
   *
   * - `manufacturer`: device manufacturer
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `device`: device device
   *
   * - `androidId`: device android_id
   *
   * - `alt`: Data format for the response.
   */
  booksPromoofferAcceptResponse(params: PromoofferService.BooksPromoofferAcceptParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.volumeId != null) __params = __params.set('volumeId', params.volumeId.toString());
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.serial != null) __params = __params.set('serial', params.serial.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.product != null) __params = __params.set('product', params.product.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.offerId != null) __params = __params.set('offerId', params.offerId.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.model != null) __params = __params.set('model', params.model.toString());
    if (params.manufacturer != null) __params = __params.set('manufacturer', params.manufacturer.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.device != null) __params = __params.set('device', params.device.toString());
    if (params.androidId != null) __params = __params.set('androidId', params.androidId.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/promooffer/accept`,
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
   * @param params The `PromoofferService.BooksPromoofferAcceptParams` containing the following parameters:
   *
   * - `volumeId`: Volume id to exercise the offer
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `serial`: device serial
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `product`: device product
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `offerId`:
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `model`: device model
   *
   * - `manufacturer`: device manufacturer
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `device`: device device
   *
   * - `androidId`: device android_id
   *
   * - `alt`: Data format for the response.
   */
  booksPromoofferAccept(params: PromoofferService.BooksPromoofferAcceptParams): __Observable<null> {
    return this.booksPromoofferAcceptResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `PromoofferService.BooksPromoofferDismissParams` containing the following parameters:
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `serial`: device serial
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `product`: device product
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `offerId`: Offer to dimiss
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `model`: device model
   *
   * - `manufacturer`: device manufacturer
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `device`: device device
   *
   * - `androidId`: device android_id
   *
   * - `alt`: Data format for the response.
   */
  booksPromoofferDismissResponse(params: PromoofferService.BooksPromoofferDismissParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.serial != null) __params = __params.set('serial', params.serial.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.product != null) __params = __params.set('product', params.product.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.offerId != null) __params = __params.set('offerId', params.offerId.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.model != null) __params = __params.set('model', params.model.toString());
    if (params.manufacturer != null) __params = __params.set('manufacturer', params.manufacturer.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.device != null) __params = __params.set('device', params.device.toString());
    if (params.androidId != null) __params = __params.set('androidId', params.androidId.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/promooffer/dismiss`,
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
   * @param params The `PromoofferService.BooksPromoofferDismissParams` containing the following parameters:
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `serial`: device serial
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `product`: device product
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `offerId`: Offer to dimiss
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `model`: device model
   *
   * - `manufacturer`: device manufacturer
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `device`: device device
   *
   * - `androidId`: device android_id
   *
   * - `alt`: Data format for the response.
   */
  booksPromoofferDismiss(params: PromoofferService.BooksPromoofferDismissParams): __Observable<null> {
    return this.booksPromoofferDismissResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Returns a list of promo offers available to the user
   * @param params The `PromoofferService.BooksPromoofferGetParams` containing the following parameters:
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `serial`: device serial
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `product`: device product
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `model`: device model
   *
   * - `manufacturer`: device manufacturer
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `device`: device device
   *
   * - `androidId`: device android_id
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksPromoofferGetResponse(params: PromoofferService.BooksPromoofferGetParams): __Observable<__StrictHttpResponse<Offers>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userIp != null) __params = __params.set('userIp', params.userIp.toString());
    if (params.serial != null) __params = __params.set('serial', params.serial.toString());
    if (params.quotaUser != null) __params = __params.set('quotaUser', params.quotaUser.toString());
    if (params.product != null) __params = __params.set('product', params.product.toString());
    if (params.prettyPrint != null) __params = __params.set('prettyPrint', params.prettyPrint.toString());
    if (params.oauthToken != null) __params = __params.set('oauth_token', params.oauthToken.toString());
    if (params.model != null) __params = __params.set('model', params.model.toString());
    if (params.manufacturer != null) __params = __params.set('manufacturer', params.manufacturer.toString());
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.device != null) __params = __params.set('device', params.device.toString());
    if (params.androidId != null) __params = __params.set('androidId', params.androidId.toString());
    if (params.alt != null) __params = __params.set('alt', params.alt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/promooffer/get`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Offers>;
      })
    );
  }
  /**
   * Returns a list of promo offers available to the user
   * @param params The `PromoofferService.BooksPromoofferGetParams` containing the following parameters:
   *
   * - `userIp`: Deprecated. Please use quotaUser instead.
   *
   * - `serial`: device serial
   *
   * - `quotaUser`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
   *
   * - `product`: device product
   *
   * - `prettyPrint`: Returns response with indentations and line breaks.
   *
   * - `oauth_token`: OAuth 2.0 token for the current user.
   *
   * - `model`: device model
   *
   * - `manufacturer`: device manufacturer
   *
   * - `key`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
   *
   * - `fields`: Selector specifying which fields to include in a partial response.
   *
   * - `device`: device device
   *
   * - `androidId`: device android_id
   *
   * - `alt`: Data format for the response.
   *
   * @return Successful response
   */
  booksPromoofferGet(params: PromoofferService.BooksPromoofferGetParams): __Observable<Offers> {
    return this.booksPromoofferGetResponse(params).pipe(
      __map(_r => _r.body as Offers)
    );
  }
}

module PromoofferService {

  /**
   * Parameters for booksPromoofferAccept
   */
  export interface BooksPromoofferAcceptParams {

    /**
     * Volume id to exercise the offer
     */
    volumeId?: string;

    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;

    /**
     * device serial
     */
    serial?: string;

    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;

    /**
     * device product
     */
    product?: string;

    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    offerId?: string;

    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;

    /**
     * device model
     */
    model?: string;

    /**
     * device manufacturer
     */
    manufacturer?: string;

    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;

    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;

    /**
     * device device
     */
    device?: string;

    /**
     * device android_id
     */
    androidId?: string;

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }

  /**
   * Parameters for booksPromoofferDismiss
   */
  export interface BooksPromoofferDismissParams {

    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;

    /**
     * device serial
     */
    serial?: string;

    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;

    /**
     * device product
     */
    product?: string;

    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;

    /**
     * Offer to dimiss
     */
    offerId?: string;

    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;

    /**
     * device model
     */
    model?: string;

    /**
     * device manufacturer
     */
    manufacturer?: string;

    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;

    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;

    /**
     * device device
     */
    device?: string;

    /**
     * device android_id
     */
    androidId?: string;

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }

  /**
   * Parameters for booksPromoofferGet
   */
  export interface BooksPromoofferGetParams {

    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;

    /**
     * device serial
     */
    serial?: string;

    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;

    /**
     * device product
     */
    product?: string;

    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;

    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;

    /**
     * device model
     */
    model?: string;

    /**
     * device manufacturer
     */
    manufacturer?: string;

    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;

    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;

    /**
     * device device
     */
    device?: string;

    /**
     * device android_id
     */
    androidId?: string;

    /**
     * Data format for the response.
     */
    alt?: 'json';
  }
}

export { PromoofferService }
