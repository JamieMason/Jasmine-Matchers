import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeEmptyString } from './toBeEmptyString';

export type ToHaveEmptyString = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveEmptyString: ToHaveEmptyString;
    }
  }
}

export const toHaveEmptyString: ToHaveEmptyString = memberMatcherFor(
  toBeEmptyString
);
