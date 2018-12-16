import every from './lib/every';
import toBeArray from './toBeArray';
import toBeNumber from './toBeNumber';
export default (actual) => toBeArray(actual) && every(actual, toBeNumber);
