/* tslint:disable */
export interface Volumeseriesinfo {

  /**
   * The display number string. This should be used only for display purposes and the actual sequence should be inferred from the below orderNumber.
   */
  bookDisplayNumber?: string;

  /**
   * Resource type.
   */
  kind?: string;

  /**
   * Short book title in the context of the series.
   */
  shortSeriesBookTitle?: string;
  volumeSeries?: Array<{issue?: Array<{issueDisplayNumber?: string, issueOrderNumber?: number}>, orderNumber?: number, seriesBookType?: string, seriesId?: string}>;
}
