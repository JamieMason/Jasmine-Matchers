import toBeNumber from './toBeNumber';

export default (value, epsilon, actual) =>
  toBeNumber(actual) && actual >= value - epsilon && actual <= value + epsilon;
