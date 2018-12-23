import { toBeObject } from './toBeObject';
import { toBeShorterThan } from './toBeShorterThan';

export type ToHaveStringShorterThan = (
  key: string,
  other: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveStringShorterThan: ToHaveStringShorterThan;
    }
  }
}

export const toHaveStringShorterThan: ToHaveStringShorterThan = (
  key,
  other,
  actual
) => toBeObject(actual) && toBeShorterThan(other, actual[key]);
