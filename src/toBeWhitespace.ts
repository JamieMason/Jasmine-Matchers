import { toBeString } from './toBeString';

export type ToBeWhitespace = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeWhitespace: ToBeWhitespace;
    }
  }
}

export const toBeWhitespace: ToBeWhitespace = (actual) =>
  toBeString(actual) && actual.search(/\S/) === -1;
