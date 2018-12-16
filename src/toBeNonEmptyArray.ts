import is from './lib/is';
export default (actual) => is.Array(actual) && actual.length > 0;
