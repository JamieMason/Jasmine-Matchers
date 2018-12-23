import { toBeObject } from './toBeObject';
import { toBeSameLengthAs } from './toBeSameLengthAs';

export const toHaveStringSameLengthAs = (key, other, actual) =>
  toBeObject(actual) && toBeSameLengthAs(other, actual[key]);
