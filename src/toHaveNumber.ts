import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeNumber } from './toBeNumber';
export const toHaveNumber = memberMatcherFor(toBeNumber);
