/* tslint:disable */
export interface ReadingPosition {

  /**
   * Position in an EPUB as a CFI.
   */
  epubCfiPosition?: string;

  /**
   * Position in a volume for image-based content.
   */
  gbImagePosition?: string;

  /**
   * Position in a volume for text-based content.
   */
  gbTextPosition?: string;

  /**
   * Resource type for a reading position.
   */
  kind?: string;

  /**
   * Position in a PDF file.
   */
  pdfPosition?: string;

  /**
   * Timestamp when this reading position was last updated (formatted UTC timestamp with millisecond resolution).
   */
  updated?: string;

  /**
   * Volume id associated with this reading position.
   */
  volumeId?: string;
}
