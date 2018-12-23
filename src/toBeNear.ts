import { toBeNumber } from './toBeNumber';

export const toBeNear = (value, epsilon, actual) =>
  toBeNumber(actual) && actual >= value - epsilon && actual <= value + epsilon;
