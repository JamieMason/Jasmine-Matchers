import { toBeString } from './toBeString';

export type ToBeHtmlString = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeHtmlString: ToBeHtmlString;
    }
  }
}

export const toBeHtmlString: ToBeHtmlString = (actual) =>
  toBeString(actual) && actual.search(/<("[^"]*"|'[^']*'|[^'">])*>/) !== -1;
