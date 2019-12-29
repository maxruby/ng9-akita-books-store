/* tslint:disable */
import { Bookshelf } from './bookshelf';
export interface Bookshelves {

  /**
   * A list of bookshelves.
   */
  items?: Array<Bookshelf>;

  /**
   * Resource type.
   */
  kind?: string;
}
