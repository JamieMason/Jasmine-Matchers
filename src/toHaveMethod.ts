import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeFunction } from './toBeFunction';

export type ToHaveMethod = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveMethod: ToHaveMethod;
    }
  }
}

export const toHaveMethod: ToHaveMethod = memberMatcherFor(toBeFunction);
