import every from './lib/every';
import toBeArray from './toBeArray';
import toBeObject from './toBeObject';
export default (actual) => toBeArray(actual) && every(actual, toBeObject);
