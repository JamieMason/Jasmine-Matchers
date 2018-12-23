import { toBeArray } from './toBeArray';

export type ToBeArrayOfSize = (
  size: number,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeArrayOfSize: ToBeArrayOfSize;
    }
  }
}

export const toBeArrayOfSize: ToBeArrayOfSize = (size, actual) =>
  toBeArray(actual) && actual.length === size;
