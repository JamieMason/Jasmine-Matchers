import toBeArray from './toBeArray';
export default (size, actual) => toBeArray(actual) && actual.length === size;
