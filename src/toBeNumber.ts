import is from './lib/is';
export default (actual) => !isNaN(parseFloat(actual)) && !is.String(actual);
