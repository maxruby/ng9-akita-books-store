/* tslint:disable */
export interface FamilyInfo {

  /**
   * Resource type.
   */
  kind?: string;

  /**
   * Family membership info of the user that made the request.
   */
  membership?: {acquirePermission?: string, ageGroup?: string, allowedMaturityRating?: string, isInFamily?: boolean, role?: string};
}
