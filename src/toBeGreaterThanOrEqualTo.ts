import toBeNumber from './toBeNumber';

export default (otherNumber, actual) =>
  toBeNumber(actual) && actual >= otherNumber;
