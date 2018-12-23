import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeNonEmptyArray } from './toBeNonEmptyArray';

export type ToHaveNonEmptyArray = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveNonEmptyArray: ToHaveNonEmptyArray;
    }
  }
}

export const toHaveNonEmptyArray: ToHaveNonEmptyArray = memberMatcherFor(
  toBeNonEmptyArray
);
