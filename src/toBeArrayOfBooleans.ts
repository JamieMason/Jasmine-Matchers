import every from './lib/every';
import toBeArray from './toBeArray';
import toBeBoolean from './toBeBoolean';
export default (actual) => toBeArray(actual) && every(actual, toBeBoolean);
