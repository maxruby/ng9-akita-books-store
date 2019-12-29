/* tslint:disable */
import { Volume } from './volume';
export interface Discoveryclusters {
  clusters?: Array<{banner_with_content_container?: {fillColorArgb?: string, imageUrl?: string, maskColorArgb?: string, moreButtonText?: string, moreButtonUrl?: string, textColorArgb?: string}, subTitle?: string, title?: string, totalVolumes?: number, uid?: string, volumes?: Array<Volume>}>;

  /**
   * Resorce type.
   */
  kind?: string;
  totalClusters?: number;
}
