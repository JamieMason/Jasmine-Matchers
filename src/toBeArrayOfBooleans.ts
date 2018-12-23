import { every } from './lib/every';
import { toBeArray } from './toBeArray';
import { toBeBoolean } from './toBeBoolean';

export type ToBeArrayOfBooleans = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeArrayOfBooleans: ToBeArrayOfBooleans;
    }
  }
}

export const toBeArrayOfBooleans: ToBeArrayOfBooleans = (actual) =>
  toBeArray(actual) && every(actual, toBeBoolean);
