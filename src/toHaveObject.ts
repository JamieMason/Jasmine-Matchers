import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeObject } from './toBeObject';

export type ToHaveObject = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveObject: ToHaveObject;
    }
  }
}

export const toHaveObject: ToHaveObject = memberMatcherFor(toBeObject);
