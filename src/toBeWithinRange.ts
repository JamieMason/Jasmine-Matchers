import { toBeNumber } from './toBeNumber';

export type ToBeWithinRange = (
  floor: number,
  ceiling: number,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeWithinRange: ToBeWithinRange;
    }
  }
}

export const toBeWithinRange: ToBeWithinRange = (floor, ceiling, actual) =>
  toBeNumber(actual) && actual >= floor && actual <= ceiling;
