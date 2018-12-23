import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeBoolean } from './toBeBoolean';

export type ToHaveBoolean = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveBoolean: ToHaveBoolean;
    }
  }
}

export const toHaveBoolean: ToHaveBoolean = memberMatcherFor(toBeBoolean);
