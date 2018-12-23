import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeJsonString } from './toBeJsonString';

export type ToHaveJsonString = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveJsonString: ToHaveJsonString;
    }
  }
}

export const toHaveJsonString: ToHaveJsonString = memberMatcherFor(
  toBeJsonString
);
