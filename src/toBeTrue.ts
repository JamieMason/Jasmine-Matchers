import is from './lib/is';
export default (actual) => actual === true || is.True(actual); // eslint-disable-line new-cap
