import { is } from './lib/is';

export type ToBeNumber = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeNumber: ToBeNumber;
    }
  }
}

export const toBeNumber: ToBeNumber = (actual) =>
  !isNaN(parseFloat(actual)) && !is.String(actual);
