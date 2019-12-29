/* tslint:disable */
export interface Layersummary {

  /**
   * The number of annotations for this layer.
   */
  annotationCount?: number;

  /**
   * The list of annotation types contained for this layer.
   */
  annotationTypes?: Array<string>;

  /**
   * Link to get data for this annotation.
   */
  annotationsDataLink?: string;

  /**
   * The link to get the annotations for this layer.
   */
  annotationsLink?: string;

  /**
   * The content version this resource is for.
   */
  contentVersion?: string;

  /**
   * The number of data items for this layer.
   */
  dataCount?: number;

  /**
   * Unique id of this layer summary.
   */
  id?: string;

  /**
   * Resource Type
   */
  kind?: string;

  /**
   * The layer id for this summary.
   */
  layerId?: string;

  /**
   * URL to this resource.
   */
  selfLink?: string;

  /**
   * Timestamp for the last time an item in this layer was updated. (RFC 3339 UTC date-time format).
   */
  updated?: string;

  /**
   * The current version of this layer's volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately.
   */
  volumeAnnotationsVersion?: string;

  /**
   * The volume id this resource is for.
   */
  volumeId?: string;
}
