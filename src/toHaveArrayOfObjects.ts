import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeArrayOfObjects } from './toBeArrayOfObjects';

export type ToHaveArrayOfObjects = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveArrayOfObjects: ToHaveArrayOfObjects;
    }
  }
}

export const toHaveArrayOfObjects: ToHaveArrayOfObjects = memberMatcherFor(
  toBeArrayOfObjects
);
