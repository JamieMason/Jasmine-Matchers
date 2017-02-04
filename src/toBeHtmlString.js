// modules
const toBeString = require('./toBeString');

// public
// <           start with opening tag "<"
//  (          start group 1
//    "[^"]*"  allow string in "double quotes"
//    |        OR
//    '[^']*'  allow string in "single quotes"
//    |        OR
//    [^'">]   cant contains one single quotes, double quotes and ">"
//  )          end group 1
//  *          0 or more
// >           end with closing tag ">"
module.exports = actual => toBeString(actual) && actual.search(/<("[^"]*"|'[^']*'|[^'">])*>/) !== -1;
