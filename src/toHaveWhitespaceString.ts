import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeWhitespace } from './toBeWhitespace';

export type ToHaveWhitespaceString = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveWhitespaceString: ToHaveWhitespaceString;
    }
  }
}

export const toHaveWhitespaceString: ToHaveWhitespaceString = memberMatcherFor(
  toBeWhitespace
);
