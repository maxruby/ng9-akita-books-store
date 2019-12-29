/* tslint:disable */
export interface Category {

  /**
   * A list of onboarding categories.
   */
  items?: Array<{badgeUrl?: string, categoryId?: string, name?: string}>;

  /**
   * Resource type.
   */
  kind?: string;
}
