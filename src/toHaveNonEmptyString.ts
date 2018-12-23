import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeNonEmptyString } from './toBeNonEmptyString';

export type ToHaveNonEmptyString = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveNonEmptyString: ToHaveNonEmptyString;
    }
  }
}

export const toHaveNonEmptyString: ToHaveNonEmptyString = memberMatcherFor(
  toBeNonEmptyString
);
