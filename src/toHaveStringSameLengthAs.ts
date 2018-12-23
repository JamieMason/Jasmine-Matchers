import { toBeObject } from './toBeObject';
import { toBeSameLengthAs } from './toBeSameLengthAs';

export type ToHaveStringSameLengthAs = (
  key: string,
  other: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveStringSameLengthAs: ToHaveStringSameLengthAs;
    }
  }
}

export const toHaveStringSameLengthAs: ToHaveStringSameLengthAs = (
  key,
  other,
  actual
) => toBeObject(actual) && toBeSameLengthAs(other, actual[key]);
