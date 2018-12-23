import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeIso8601 } from './toBeIso8601';

export type ToHaveIso8601 = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveIso8601: ToHaveIso8601;
    }
  }
}

export const toHaveIso8601: ToHaveIso8601 = memberMatcherFor(toBeIso8601);
