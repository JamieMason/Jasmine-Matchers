import toBeNumber from './toBeNumber';

export default (actual) =>
  toBeNumber(actual) && (actual === 0 || actual % 1 === 0);
