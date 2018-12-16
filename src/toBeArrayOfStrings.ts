import every from './lib/every';
import toBeArray from './toBeArray';
import toBeString from './toBeString';
export default (actual) => toBeArray(actual) && every(actual, toBeString);
