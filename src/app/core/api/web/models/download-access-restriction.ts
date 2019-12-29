/* tslint:disable */
export interface DownloadAccessRestriction {

  /**
   * If restricted, whether access is granted for this (user, device, volume).
   */
  deviceAllowed?: boolean;

  /**
   * If restricted, the number of content download licenses already acquired (including the requesting client, if licensed).
   */
  downloadsAcquired?: number;

  /**
   * If deviceAllowed, whether access was just acquired with this request.
   */
  justAcquired?: boolean;

  /**
   * Resource type.
   */
  kind?: string;

  /**
   * If restricted, the maximum number of content download licenses for this volume.
   */
  maxDownloadDevices?: number;

  /**
   * Error/warning message.
   */
  message?: string;

  /**
   * Client nonce for verification. Download access and client-validation only.
   */
  nonce?: string;

  /**
   * Error/warning reason code. Additional codes may be added in the future. 0 OK 100 ACCESS_DENIED_PUBLISHER_LIMIT 101 ACCESS_DENIED_LIMIT 200 WARNING_USED_LAST_ACCESS
   */
  reasonCode?: string;

  /**
   * Whether this volume has any download access restrictions.
   */
  restricted?: boolean;

  /**
   * Response signature.
   */
  signature?: string;

  /**
   * Client app identifier for verification. Download access and client-validation only.
   */
  source?: string;

  /**
   * Identifies the volume for which this entry applies.
   */
  volumeId?: string;
}
