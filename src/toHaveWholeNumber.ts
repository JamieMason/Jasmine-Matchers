import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeWholeNumber } from './toBeWholeNumber';

export type ToHaveWholeNumber = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveWholeNumber: ToHaveWholeNumber;
    }
  }
}

export const toHaveWholeNumber: ToHaveWholeNumber = memberMatcherFor(
  toBeWholeNumber
);
