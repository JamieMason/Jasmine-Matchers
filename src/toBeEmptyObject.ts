import is from './lib/is';
import keys from './lib/keys';
export default (actual) => is.Object(actual) && keys(actual).length === 0;
