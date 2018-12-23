import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeFalse } from './toBeFalse';

export type ToHaveFalse = (key: string, expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveFalse: ToHaveFalse;
    }
  }
}

export const toHaveFalse: ToHaveFalse = memberMatcherFor(toBeFalse);
