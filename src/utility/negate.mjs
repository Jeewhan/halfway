function negate(func) {
  return value => !func(value);
}

export default negate;
