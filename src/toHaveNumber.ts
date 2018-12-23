import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeNumber } from './toBeNumber';

export type ToHaveNumber = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveNumber: ToHaveNumber;
    }
  }
}

export const toHaveNumber: ToHaveNumber = memberMatcherFor(toBeNumber);
