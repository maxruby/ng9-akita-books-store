/* tslint:disable */
export interface Offers {

  /**
   * A list of offers.
   */
  items?: Array<{artUrl?: string, gservicesKey?: string, id?: string, items?: Array<{author?: string, canonicalVolumeLink?: string, coverUrl?: string, description?: string, title?: string, volumeId?: string}>}>;

  /**
   * Resource type.
   */
  kind?: string;
}
