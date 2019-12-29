/* tslint:disable */
export interface Bookshelf {

  /**
   * Whether this bookshelf is PUBLIC or PRIVATE.
   */
  access?: string;

  /**
   * Created time for this bookshelf (formatted UTC timestamp with millisecond resolution).
   */
  created?: string;

  /**
   * Description of this bookshelf.
   */
  description?: string;

  /**
   * Id of this bookshelf, only unique by user.
   */
  id?: number;

  /**
   * Resource type for bookshelf metadata.
   */
  kind?: string;

  /**
   * URL to this resource.
   */
  selfLink?: string;

  /**
   * Title of this bookshelf.
   */
  title?: string;

  /**
   * Last modified time of this bookshelf (formatted UTC timestamp with millisecond resolution).
   */
  updated?: string;

  /**
   * Number of volumes in this bookshelf.
   */
  volumeCount?: number;

  /**
   * Last time a volume was added or removed from this bookshelf (formatted UTC timestamp with millisecond resolution).
   */
  volumesLastUpdated?: string;
}
