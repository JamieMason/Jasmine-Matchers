import { toBeString } from './toBeString';

export type ToBeLongerThan = (
  other: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeLongerThan: ToBeLongerThan;
    }
  }
}

export const toBeLongerThan: ToBeLongerThan = (otherString, actual) =>
  toBeString(actual) &&
  toBeString(otherString) &&
  actual.length > otherString.length;
