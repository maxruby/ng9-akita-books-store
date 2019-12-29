/* tslint:disable */
export interface Notification {
  body?: string;

  /**
   * The list of crm experiment ids.
   */
  crmExperimentIds?: Array<string>;
  doc_id?: string;
  doc_type?: string;
  dont_show_notification?: boolean;
  iconUrl?: string;
  is_document_mature?: boolean;

  /**
   * Resource type.
   */
  kind?: string;
  notificationGroup?: string;
  notification_type?: string;
  pcampaign_id?: string;
  reason?: string;
  show_notification_settings_action?: boolean;
  targetUrl?: string;
  timeToExpireMs?: string;
  title?: string;
}
