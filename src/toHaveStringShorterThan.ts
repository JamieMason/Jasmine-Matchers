import { toBeObject } from './toBeObject';
import { toBeShorterThan } from './toBeShorterThan';

export const toHaveStringShorterThan = (key, other, actual) =>
  toBeObject(actual) && toBeShorterThan(other, actual[key]);
