import { toBeBefore } from './toBeBefore';

export type ToBeAfter = (
  otherDate: Date,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeAfter: ToBeAfter;
    }
  }
}

export const toBeAfter: ToBeAfter = (otherDate, actual) =>
  toBeBefore(actual, otherDate);
