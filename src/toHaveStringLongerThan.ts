import { toBeLongerThan } from './toBeLongerThan';
import { toBeObject } from './toBeObject';

export const toHaveStringLongerThan = (key, other, actual) =>
  toBeObject(actual) && toBeLongerThan(other, actual[key]);
