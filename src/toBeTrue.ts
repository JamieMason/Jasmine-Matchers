import { is } from './lib/is';

export type ToBeTrue = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeTrue: ToBeTrue;
    }
  }
}

export const toBeTrue: ToBeTrue = (actual) =>
  actual === true || is.True(actual);
