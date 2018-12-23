import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeDate } from './toBeDate';

export type ToHaveDate = (key: string, expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveDate: ToHaveDate;
    }
  }
}

export const toHaveDate: ToHaveDate = memberMatcherFor(toBeDate);
