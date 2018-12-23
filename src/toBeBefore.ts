import { toBeDate } from './toBeDate';

export type ToBeBefore = (
  otherDate: Date,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeBefore: ToBeBefore;
    }
  }
}

export const toBeBefore: ToBeBefore = (otherDate, actual) =>
  toBeDate(actual) &&
  toBeDate(otherDate) &&
  actual.getTime() < otherDate.getTime();
