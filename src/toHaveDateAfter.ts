import toBeAfter from './toBeAfter';
import toBeObject from './toBeObject';

export default (key, date, actual) =>
  toBeObject(actual) && toBeAfter(date, actual[key]);
