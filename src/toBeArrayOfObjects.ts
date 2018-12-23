import { every } from './lib/every';
import { toBeArray } from './toBeArray';
import { toBeObject } from './toBeObject';

export type ToBeArrayOfObjects = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeArrayOfObjects: ToBeArrayOfObjects;
    }
  }
}

export const toBeArrayOfObjects: ToBeArrayOfObjects = (actual) =>
  toBeArray(actual) && every(actual, toBeObject);
