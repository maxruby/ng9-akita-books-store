/* tslint:disable */
export interface ConcurrentAccessRestriction {

  /**
   * Whether access is granted for this (user, device, volume).
   */
  deviceAllowed?: boolean;

  /**
   * Resource type.
   */
  kind?: string;

  /**
   * The maximum number of concurrent access licenses for this volume.
   */
  maxConcurrentDevices?: number;

  /**
   * Error/warning message.
   */
  message?: string;

  /**
   * Client nonce for verification. Download access and client-validation only.
   */
  nonce?: string;

  /**
   * Error/warning reason code.
   */
  reasonCode?: string;

  /**
   * Whether this volume has any concurrent access restrictions.
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
   * Time in seconds for license auto-expiration.
   */
  timeWindowSeconds?: number;

  /**
   * Identifies the volume for which this entry applies.
   */
  volumeId?: string;
}
