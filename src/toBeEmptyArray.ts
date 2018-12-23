import { toBeArrayOfSize } from './toBeArrayOfSize';

export type ToBeEmptyArray = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeEmptyArray: ToBeEmptyArray;
    }
  }
}

export const toBeEmptyArray: ToBeEmptyArray = (actual) =>
  toBeArrayOfSize(0, actual);
