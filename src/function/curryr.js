function curryr(f) {
  return (...args) => (args.length === 2 ? f(...args) : arg => f(arg, ...args));
}

export default curryr;
