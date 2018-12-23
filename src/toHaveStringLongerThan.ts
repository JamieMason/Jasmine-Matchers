import { toBeLongerThan } from './toBeLongerThan';
import { toBeObject } from './toBeObject';

export type ToHaveStringLongerThan = (
  key: string,
  other: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveStringLongerThan: ToHaveStringLongerThan;
    }
  }
}

export const toHaveStringLongerThan: ToHaveStringLongerThan = (
  key,
  other,
  actual
) => toBeObject(actual) && toBeLongerThan(other, actual[key]);
