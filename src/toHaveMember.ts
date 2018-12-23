import { toBeObject } from './toBeObject';
import { toBeString } from './toBeString';

export type ToHaveMember = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveMember: ToHaveMember;
    }
  }
}

export const toHaveMember: ToHaveMember = (key, actual) =>
  toBeString(key) && toBeObject(actual) && key in actual;
