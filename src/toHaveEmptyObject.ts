import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeEmptyObject } from './toBeEmptyObject';

export type ToHaveEmptyObject = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveEmptyObject: ToHaveEmptyObject;
    }
  }
}

export const toHaveEmptyObject: ToHaveEmptyObject = memberMatcherFor(
  toBeEmptyObject
);
