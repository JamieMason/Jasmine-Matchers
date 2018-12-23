import { is } from './lib/is';

export type ToBeString = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeString: ToBeString;
    }
  }
}

export const toBeString: ToBeString = is.String;
