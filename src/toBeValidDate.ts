import { is } from './lib/is';

export type ToBeValidDate = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeValidDate: ToBeValidDate;
    }
  }
}

export const toBeValidDate: ToBeValidDate = (actual) =>
  is.Date(actual) && !isNaN(actual.getTime());
