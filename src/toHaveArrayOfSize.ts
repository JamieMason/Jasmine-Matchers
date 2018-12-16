import toBeArrayOfSize from './toBeArrayOfSize';
import toBeObject from './toBeObject';

export default (key, size, actual) =>
  toBeObject(actual) && toBeArrayOfSize(size, actual[key]);
