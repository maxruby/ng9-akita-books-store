/* tslint:disable */
import { DownloadAccessRestriction } from './download-access-restriction';
import { ReadingPosition } from './reading-position';
import { Review } from './review';
import { Volumeseriesinfo } from './volumeseriesinfo';
export interface Volume {

  /**
   * Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.).
   */
  accessInfo?: {accessViewStatus?: string, country?: string, downloadAccess?: DownloadAccessRestriction, driveImportedContentLink?: string, embeddable?: boolean, epub?: {acsTokenLink?: string, downloadLink?: string, isAvailable?: boolean}, explicitOfflineLicenseManagement?: boolean, pdf?: {acsTokenLink?: string, downloadLink?: string, isAvailable?: boolean}, publicDomain?: boolean, quoteSharingAllowed?: boolean, textToSpeechPermission?: string, viewOrderUrl?: string, viewability?: string, webReaderLink?: string};

  /**
   * Opaque identifier for a specific version of a volume resource. (In LITE projection)
   */
  etag?: string;

  /**
   * Unique identifier for a volume. (In LITE projection.)
   */
  id?: string;

  /**
   * Resource type for a volume. (In LITE projection.)
   */
  kind?: string;

  /**
   * What layers exist in this volume and high level information about them.
   */
  layerInfo?: {layers?: Array<{layerId?: string, volumeAnnotationsVersion?: string}>};

  /**
   * Recommendation related information for this volume.
   */
  recommendedInfo?: {explanation?: string};

  /**
   * Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).
   */
  saleInfo?: {buyLink?: string, country?: string, isEbook?: boolean, listPrice?: {amount?: number, currencyCode?: string}, offers?: Array<{finskyOfferType?: number, giftable?: boolean, listPrice?: {amountInMicros?: number, currencyCode?: string}, rentalDuration?: {count?: number, unit?: string}, retailPrice?: {amountInMicros?: number, currencyCode?: string}}>, onSaleDate?: string, retailPrice?: {amount?: number, currencyCode?: string}, saleability?: string};

  /**
   * Search result information related to this volume.
   */
  searchInfo?: {textSnippet?: string};

  /**
   * URL to this resource. (In LITE projection.)
   */
  selfLink?: string;

  /**
   * User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)
   */
  userInfo?: {acquiredTime?: string, acquisitionType?: number, copy?: {allowedCharacterCount?: number, limitType?: string, remainingCharacterCount?: number, updated?: string}, entitlementType?: number, familySharing?: {familyRole?: string, isSharingAllowed?: boolean, isSharingDisabledByFop?: boolean}, isFamilySharedFromUser?: boolean, isFamilySharedToUser?: boolean, isFamilySharingAllowed?: boolean, isFamilySharingDisabledByFop?: boolean, isInMyBooks?: boolean, isPreordered?: boolean, isPurchased?: boolean, isUploaded?: boolean, readingPosition?: ReadingPosition, rentalPeriod?: {endUtcSec?: string, startUtcSec?: string}, rentalState?: string, review?: Review, updated?: string, userUploadedVolumeInfo?: {processingState?: string}};

  /**
   * General volume information.
   */
  volumeInfo?: {allowAnonLogging?: boolean, authors?: Array<string>, averageRating?: number, canonicalVolumeLink?: string, categories?: Array<string>, comicsContent?: boolean, contentVersion?: string, description?: string, dimensions?: {height?: string, thickness?: string, width?: string}, imageLinks?: {extraLarge?: string, large?: string, medium?: string, small?: string, smallThumbnail?: string, thumbnail?: string}, industryIdentifiers?: Array<{identifier?: string, type?: string}>, infoLink?: string, language?: string, mainCategory?: string, maturityRating?: string, pageCount?: number, panelizationSummary?: {containsEpubBubbles?: boolean, containsImageBubbles?: boolean, epubBubbleVersion?: string, imageBubbleVersion?: string}, previewLink?: string, printType?: string, printedPageCount?: number, publishedDate?: string, publisher?: string, ratingsCount?: number, readingModes?: any, samplePageCount?: number, seriesInfo?: Volumeseriesinfo, subtitle?: string, title?: string};
}
