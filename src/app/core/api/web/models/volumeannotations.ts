/* tslint:disable */
import { Volumeannotation } from './volumeannotation';
export interface Volumeannotations {

  /**
   * A list of volume annotations.
   */
  items?: Array<Volumeannotation>;

  /**
   * Resource type
   */
  kind?: string;

  /**
   * Token to pass in for pagination for the next page. This will not be present if this request does not have more results.
   */
  nextPageToken?: string;

  /**
   * The total number of volume annotations found.
   */
  totalItems?: number;

  /**
   * The version string for all of the volume annotations in this layer (not just the ones in this response). Note: the version string doesn't apply to the annotation data, just the information in this response (e.g. the location of annotations in the book).
   */
  version?: string;
}
