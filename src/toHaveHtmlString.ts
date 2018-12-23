import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeHtmlString } from './toBeHtmlString';

export type ToHaveHtmlString = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveHtmlString: ToHaveHtmlString;
    }
  }
}

export const toHaveHtmlString: ToHaveHtmlString = memberMatcherFor(
  toBeHtmlString
);
