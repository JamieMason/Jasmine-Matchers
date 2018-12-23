import { is } from './lib/is';
export const toBeNonEmptyArray = (actual) =>
  is.Array(actual) && actual.length > 0;
