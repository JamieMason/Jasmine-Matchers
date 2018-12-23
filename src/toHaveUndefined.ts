import { toBeObject } from './toBeObject';
import { toHaveMember } from './toHaveMember';

export type ToHaveUndefined = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveUndefined: ToHaveUndefined;
    }
  }
}

export const toHaveUndefined: ToHaveUndefined = (key, actual) =>
  toBeObject(actual) &&
  toHaveMember(key, actual) &&
  typeof actual[key] === 'undefined';
