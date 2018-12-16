import toBeBefore from './toBeBefore';
import toBeObject from './toBeObject';

export default (key, date, actual) =>
  toBeObject(actual) && toBeBefore(date, actual[key]);
