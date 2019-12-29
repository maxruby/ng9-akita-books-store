/* tslint:disable */
import { Layersummary } from './layersummary';
export interface Layersummaries {

  /**
   * A list of layer summary items.
   */
  items?: Array<Layersummary>;

  /**
   * Resource type.
   */
  kind?: string;

  /**
   * The total number of layer summaries found.
   */
  totalItems?: number;
}
