import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeEmptyArray } from './toBeEmptyArray';

export type ToHaveEmptyArray = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveEmptyArray: ToHaveEmptyArray;
    }
  }
}

export const toHaveEmptyArray: ToHaveEmptyArray = memberMatcherFor(
  toBeEmptyArray
);
