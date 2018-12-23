import { toBeAfter } from './toBeAfter';
import { toBeObject } from './toBeObject';

export type ToHaveDateAfter = (
  key: string,
  otherDate: Date,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveDateAfter: ToHaveDateAfter;
    }
  }
}

export const toHaveDateAfter: ToHaveDateAfter = (key, date, actual) =>
  toBeObject(actual) && toBeAfter(date, actual[key]);
