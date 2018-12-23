import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeArrayOfStrings } from './toBeArrayOfStrings';

export type ToHaveArrayOfStrings = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveArrayOfStrings: ToHaveArrayOfStrings;
    }
  }
}

export const toHaveArrayOfStrings: ToHaveArrayOfStrings = memberMatcherFor(
  toBeArrayOfStrings
);
