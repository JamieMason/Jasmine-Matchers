import { is } from './lib/is';

export type ToBeFunction = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeFunction: ToBeFunction;
    }
  }
}

export const toBeFunction: ToBeFunction = is.Function;
