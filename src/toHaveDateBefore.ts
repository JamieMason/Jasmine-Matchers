import { toBeBefore } from './toBeBefore';
import { toBeObject } from './toBeObject';

export type ToHaveDateBefore = (
  key: string,
  otherDate: Date,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveDateBefore: ToHaveDateBefore;
    }
  }
}

export const toHaveDateBefore: ToHaveDateBefore = (key, date, actual) =>
  toBeObject(actual) && toBeBefore(date, actual[key]);
