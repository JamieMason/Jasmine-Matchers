import { toBeObject } from './toBeObject';
import { toBeWithinRange } from './toBeWithinRange';

export type ToHaveNumberWithinRange = (
  key: string,
  floor: number,
  ceiling: number,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveNumberWithinRange: ToHaveNumberWithinRange;
    }
  }
}

export const toHaveNumberWithinRange: ToHaveNumberWithinRange = (
  key,
  floor,
  ceiling,
  actual
) => toBeObject(actual) && toBeWithinRange(floor, ceiling, actual[key]);
