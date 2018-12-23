import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeNonEmptyObject } from './toBeNonEmptyObject';

export type ToHaveNonEmptyObject = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveNonEmptyObject: ToHaveNonEmptyObject;
    }
  }
}

export const toHaveNonEmptyObject: ToHaveNonEmptyObject = memberMatcherFor(
  toBeNonEmptyObject
);
