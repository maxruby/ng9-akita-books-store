/* tslint:disable */
export interface Annotationdata {

  /**
   * The type of annotation this data is for.
   */
  annotationType?: string;
  data?: any;

  /**
   * Base64 encoded data for this annotation data.
   */
  encoded_data?: string;

  /**
   * Unique id for this annotation data.
   */
  id?: string;

  /**
   * Resource Type
   */
  kind?: string;

  /**
   * The Layer id for this data. *
   */
  layerId?: string;

  /**
   * URL for this resource. *
   */
  selfLink?: string;

  /**
   * Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format).
   */
  updated?: string;

  /**
   * The volume id for this data. *
   */
  volumeId?: string;
}
