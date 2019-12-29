/* tslint:disable */
import { Annotationdata } from './annotationdata';
export interface Annotationsdata {

  /**
   * A list of Annotation Data.
   */
  items?: Array<Annotationdata>;

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
}
