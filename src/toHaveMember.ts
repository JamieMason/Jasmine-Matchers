import toBeObject from './toBeObject';
import toBeString from './toBeString';

export default (key, actual) =>
  toBeString(key) && toBeObject(actual) && key in actual;
