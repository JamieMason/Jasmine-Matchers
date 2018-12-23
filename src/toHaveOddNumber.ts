import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeOddNumber } from './toBeOddNumber';

export type ToHaveOddNumber = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveOddNumber: ToHaveOddNumber;
    }
  }
}

export const toHaveOddNumber: ToHaveOddNumber = memberMatcherFor(toBeOddNumber);
