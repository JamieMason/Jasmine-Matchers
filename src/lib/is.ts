const createIs = (type) => (value) =>
  Object.prototype.toString.call(value) === `[object ${type}]`;

const createIsBooleanObject = (trueOrFalse) => (value) =>
  is.Boolean(value) && value.valueOf() === trueOrFalse;

const createIsFunction = () => {
  const syncFn = createIs('Function');
  const asyncFn = createIs('AsyncFunction');
  return (value) => syncFn(value) || asyncFn(value);
};

export const is = {
  Array: createIs('Array'),
  Boolean: createIs('Boolean'),
  Date: createIs('Date'),
  False: createIsBooleanObject(false),
  Function: createIsFunction(),
  Object: createIs('Object'),
  String: createIs('String'),
  True: createIsBooleanObject(true),
};
