import { is } from './is';

export const memberMatcherFor = (toBeX) => (key, actual) =>
  is.Object(actual) && toBeX(actual[key]);
