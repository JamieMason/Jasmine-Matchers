import { toBeString } from './toBeString';

export type ToBeSameLengthAs = (
  other: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeSameLengthAs: ToBeSameLengthAs;
    }
  }
}

export const toBeSameLengthAs: ToBeSameLengthAs = (otherString, actual) =>
  toBeString(actual) &&
  toBeString(otherString) &&
  actual.length === otherString.length;
