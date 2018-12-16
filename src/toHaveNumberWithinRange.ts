import toBeObject from './toBeObject';
import toBeWithinRange from './toBeWithinRange';

export default (key, floor, ceiling, actual) =>
  toBeObject(actual) && toBeWithinRange(floor, ceiling, actual[key]);
