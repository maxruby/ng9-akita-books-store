/* tslint:disable */
import { Volume } from './volume';
export interface Volume2 {

  /**
   * A list of volumes.
   */
  items?: Array<Volume>;

  /**
   * Resource type.
   */
  kind?: string;
  nextPageToken?: string;
}
