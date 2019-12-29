/* tslint:disable */
export interface Series {

  /**
   * Resource type.
   */
  kind?: string;
  series?: Array<{bannerImageUrl?: string, eligibleForSubscription?: boolean, imageUrl?: string, isComplete?: boolean, seriesId?: string, seriesType?: string, subscriptionId?: string, title?: string}>;
}
