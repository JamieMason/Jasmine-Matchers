import { is } from './lib/is';

export type ToBeObject = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeObject: ToBeObject;
    }
  }
}

export const toBeObject: ToBeObject = is.Object;
