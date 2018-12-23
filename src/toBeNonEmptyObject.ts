import { is } from './lib/is';
import { keys } from './lib/keys';

export type ToBeNonEmptyObject = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeNonEmptyObject: ToBeNonEmptyObject;
    }
  }
}

export const toBeNonEmptyObject: ToBeNonEmptyObject = (actual) =>
  is.Object(actual) && keys(actual).length > 0;
