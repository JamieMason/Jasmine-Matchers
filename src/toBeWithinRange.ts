import toBeNumber from './toBeNumber';

export default (floor, ceiling, actual) =>
  toBeNumber(actual) && actual >= floor && actual <= ceiling;
