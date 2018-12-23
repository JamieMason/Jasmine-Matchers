import { is } from './lib/is';

export type ToBeBoolean = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeBoolean: ToBeBoolean;
    }
  }
}

export const toBeBoolean: ToBeBoolean = is.Boolean;
