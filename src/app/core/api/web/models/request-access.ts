/* tslint:disable */
import { ConcurrentAccessRestriction } from './concurrent-access-restriction';
import { DownloadAccessRestriction } from './download-access-restriction';
export interface RequestAccess {

  /**
   * A concurrent access response.
   */
  concurrentAccess?: ConcurrentAccessRestriction;

  /**
   * A download access response.
   */
  downloadAccess?: DownloadAccessRestriction;

  /**
   * Resource type.
   */
  kind?: string;
}
