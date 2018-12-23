import { is } from './lib/is';
import { keys } from './lib/keys';

export type ToBeEmptyObject = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeEmptyObject: ToBeEmptyObject;
    }
  }
}

export const toBeEmptyObject: ToBeEmptyObject = (actual) =>
  is.Object(actual) && keys(actual).length === 0;
