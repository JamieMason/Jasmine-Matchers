import { addMatchers } from 'add-matchers';
import * as asymmetricMatchersByName from './asymmetricMatchersByName';
import * as matchersByName from './matchersByName';

addMatchers(matchersByName);
addMatchers.asymmetric(asymmetricMatchersByName);

export default matchersByName;
