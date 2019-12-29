/* tslint:disable */
export interface Review {

  /**
   * Author of this review.
   */
  author?: {displayName?: string};

  /**
   * Review text.
   */
  content?: string;

  /**
   * Date of this review.
   */
  date?: string;

  /**
   * URL for the full review text, for reviews gathered from the web.
   */
  fullTextUrl?: string;

  /**
   * Resource type for a review.
   */
  kind?: string;

  /**
   * Star rating for this review. Possible values are ONE, TWO, THREE, FOUR, FIVE or NOT_RATED.
   */
  rating?: string;

  /**
   * Information regarding the source of this review, when the review is not from a Google Books user.
   */
  source?: {description?: string, extraDescription?: string, url?: string};

  /**
   * Title for this review.
   */
  title?: string;

  /**
   * Source type for this review. Possible values are EDITORIAL, WEB_USER or GOOGLE_USER.
   */
  type?: string;

  /**
   * Volume that this review is for.
   */
  volumeId?: string;
}
