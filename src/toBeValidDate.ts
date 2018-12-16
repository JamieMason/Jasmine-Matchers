import is from './lib/is';
export default (actual) => is.Date(actual) && !isNaN(actual.getTime());
