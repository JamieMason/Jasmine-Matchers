import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeCalculable } from './toBeCalculable';

export type ToHaveCalculable = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveCalculable: ToHaveCalculable;
    }
  }
}

export const toHaveCalculable: ToHaveCalculable = memberMatcherFor(
  toBeCalculable
);
