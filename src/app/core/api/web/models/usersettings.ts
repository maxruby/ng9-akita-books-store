/* tslint:disable */
export interface Usersettings {

  /**
   * Resource type.
   */
  kind?: string;

  /**
   * User settings in sub-objects, each for different purposes.
   */
  notesExport?: {folderName?: string, isEnabled?: boolean};
  notification?: {matchMyInterests?: {opted_state?: string}, moreFromAuthors?: {opted_state?: string}, moreFromSeries?: {opted_state?: string}, priceDrop?: {opted_state?: string}, rewardExpirations?: {opted_state?: string}};
}
