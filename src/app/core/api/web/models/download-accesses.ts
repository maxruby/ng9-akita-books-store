/* tslint:disable */
import { DownloadAccessRestriction } from './download-access-restriction';
export interface DownloadAccesses {

  /**
   * A list of download access responses.
   */
  downloadAccessList?: Array<DownloadAccessRestriction>;

  /**
   * Resource type.
   */
  kind?: string;
}
