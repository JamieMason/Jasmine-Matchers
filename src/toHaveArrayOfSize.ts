import { toBeArrayOfSize } from './toBeArrayOfSize';
import { toBeObject } from './toBeObject';

export type ToHaveArrayOfSize = (
  key: string,
  size?: number,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveArrayOfSize: ToHaveArrayOfSize;
    }
  }
}

export const toHaveArrayOfSize: ToHaveArrayOfSize = (key, size, actual) =>
  toBeObject(actual) && toBeArrayOfSize(size, actual[key]);
