import { is } from './lib/is';

export type ToBeDate = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeDate: ToBeDate;
    }
  }
}

export const toBeDate: ToBeDate = is.Date;
