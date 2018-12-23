import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeArray } from './toBeArray';

export type ToHaveArray = (key: string, expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveArray: ToHaveArray;
    }
  }
}

export const toHaveArray: ToHaveArray = memberMatcherFor(toBeArray);
