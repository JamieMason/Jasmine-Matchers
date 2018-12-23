import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeJsonString } from './toBeJsonString';
export const toHaveJsonString = memberMatcherFor(toBeJsonString);
