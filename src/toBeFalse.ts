import { is } from './lib/is';

export type ToBeFalse = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeFalse: ToBeFalse;
    }
  }
}

export const toBeFalse: ToBeFalse = (actual) =>
  actual === false || is.False(actual);
