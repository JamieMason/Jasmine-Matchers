import { toBeNumber } from './toBeNumber';

export type ToBeNear = (
  value: number,
  epsilon: number,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeNear: ToBeNear;
    }
  }
}

export const toBeNear: ToBeNear = (value, epsilon, actual) =>
  toBeNumber(actual) && actual >= value - epsilon && actual <= value + epsilon;
