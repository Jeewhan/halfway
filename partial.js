function _(func, ...args) {
  const parts = args.slice();

  return (...args) => {
    const rest = args.slice();

    for (let i in parts) if (parts[i] === _) parts[i] = rest.shift();

    return func(...parts);
  };
}

module.exports = _;
