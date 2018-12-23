import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeString } from './toBeString';

export type ToHaveString = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveString: ToHaveString;
    }
  }
}

export const toHaveString: ToHaveString = memberMatcherFor(toBeString);
