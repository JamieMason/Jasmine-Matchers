import is from './is';

export default (toBeX) => (key, actual) =>
  is.Object(actual) && toBeX(actual[key]);
