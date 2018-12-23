import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeCalculable } from './toBeCalculable';
export const toHaveCalculable = memberMatcherFor(toBeCalculable);
