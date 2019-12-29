/* tslint:disable */
import { Volume } from './volume';
export interface Seriesmembership {

  /**
   * Resorce type.
   */
  kind?: string;
  member?: Array<Volume>;
  nextPageToken?: string;
}
