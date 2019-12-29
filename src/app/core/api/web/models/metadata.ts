/* tslint:disable */
export interface Metadata {

  /**
   * A list of offline dictionary metadata.
   */
  items?: Array<{download_url?: string, encrypted_key?: string, language?: string, size?: string, version?: string}>;

  /**
   * Resource type.
   */
  kind?: string;
}
