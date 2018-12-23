import { is } from './lib/is';
import { keys } from './lib/keys';
export const toBeNonEmptyObject = (actual) =>
  is.Object(actual) && keys(actual).length > 0;
