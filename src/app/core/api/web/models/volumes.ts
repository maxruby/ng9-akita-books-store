/* tslint:disable */
import { Volume } from './volume';
export interface Volumes {

  /**
   * A list of volumes.
   */
  items?: Array<Volume>;

  /**
   * Resource type.
   */
  kind?: string;

  /**
   * Total number of volumes found. This might be greater than the number of volumes returned in this response if results have been paginated.
   */
  totalItems?: number;
}
