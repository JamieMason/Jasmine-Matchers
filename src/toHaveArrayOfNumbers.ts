import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeArrayOfNumbers } from './toBeArrayOfNumbers';

export type ToHaveArrayOfNumbers = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveArrayOfNumbers: ToHaveArrayOfNumbers;
    }
  }
}

export const toHaveArrayOfNumbers: ToHaveArrayOfNumbers = memberMatcherFor(
  toBeArrayOfNumbers
);
