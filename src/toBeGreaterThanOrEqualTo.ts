import { toBeNumber } from './toBeNumber';

export type ToBeGreaterThanOrEqualTo = (
  otherNumber: number,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeGreaterThanOrEqualTo: ToBeGreaterThanOrEqualTo;
    }
  }
}

export const toBeGreaterThanOrEqualTo: ToBeGreaterThanOrEqualTo = (
  otherNumber,
  actual
) => toBeNumber(actual) && actual >= otherNumber;
