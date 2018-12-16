import toBeNonEmptyString from './toBeNonEmptyString';

export default (subString, actual) =>
  toBeNonEmptyString(actual) &&
  toBeNonEmptyString(subString) &&
  actual.slice(actual.length - subString.length, actual.length) === subString;
