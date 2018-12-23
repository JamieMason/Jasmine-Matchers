import { is } from './lib/is';

export type ToBeArray = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeArray: ToBeArray;
    }
  }
}

export const toBeArray: ToBeArray = is.Array;
