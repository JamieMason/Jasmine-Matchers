import toBeNonEmptyString from './toBeNonEmptyString';

export default (subString, actual) =>
  toBeNonEmptyString(actual) &&
  toBeNonEmptyString(subString) &&
  actual.slice(0, subString.length) === subString;
