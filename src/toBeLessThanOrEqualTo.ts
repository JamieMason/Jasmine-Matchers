import { toBeNumber } from './toBeNumber';

export type ToBeLessThanOrEqualTo = (
  otherNumber: number,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeLessThanOrEqualTo: ToBeLessThanOrEqualTo;
    }
  }
}

export const toBeLessThanOrEqualTo: ToBeLessThanOrEqualTo = (
  otherNumber,
  actual
) => toBeNumber(actual) && actual <= otherNumber;
