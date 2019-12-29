/* tslint:disable */
import { BooksAnnotationsRange } from './books-annotations-range';
export interface Annotation {

  /**
   * Anchor text after excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.
   */
  afterSelectedText?: string;

  /**
   * Anchor text before excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.
   */
  beforeSelectedText?: string;

  /**
   * Selection ranges sent from the client.
   */
  clientVersionRanges?: {cfiRange?: BooksAnnotationsRange, contentVersion?: string, gbImageRange?: BooksAnnotationsRange, gbTextRange?: BooksAnnotationsRange, imageCfiRange?: BooksAnnotationsRange};

  /**
   * Timestamp for the created time of this annotation.
   */
  created?: string;

  /**
   * Selection ranges for the most recent content version.
   */
  currentVersionRanges?: {cfiRange?: BooksAnnotationsRange, contentVersion?: string, gbImageRange?: BooksAnnotationsRange, gbTextRange?: BooksAnnotationsRange, imageCfiRange?: BooksAnnotationsRange};

  /**
   * User-created data for this annotation.
   */
  data?: string;

  /**
   * Indicates that this annotation is deleted.
   */
  deleted?: boolean;

  /**
   * The highlight style for this annotation.
   */
  highlightStyle?: string;

  /**
   * Id of this annotation, in the form of a GUID.
   */
  id?: string;

  /**
   * Resource type.
   */
  kind?: string;

  /**
   * The layer this annotation is for.
   */
  layerId?: string;
  layerSummary?: {allowedCharacterCount?: number, limitType?: string, remainingCharacterCount?: number};

  /**
   * Pages that this annotation spans.
   */
  pageIds?: Array<string>;

  /**
   * Excerpt from the volume.
   */
  selectedText?: string;

  /**
   * URL to this resource.
   */
  selfLink?: string;

  /**
   * Timestamp for the last time this annotation was modified.
   */
  updated?: string;

  /**
   * The volume that this annotation belongs to.
   */
  volumeId?: string;
}
