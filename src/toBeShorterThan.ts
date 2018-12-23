import { toBeString } from './toBeString';

export type ToBeShorterThan = (
  other: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeShorterThan: ToBeShorterThan;
    }
  }
}

export const toBeShorterThan: ToBeShorterThan = (otherString, actual) =>
  toBeString(actual) &&
  toBeString(otherString) &&
  actual.length < otherString.length;
