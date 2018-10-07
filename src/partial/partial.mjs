function _(func, ...args) {
  const parts = [...args];

  return (...args) => {
    const rest = [...args];
    const len = parts.length;
    let i = -1;

    while (++i < len) if (parts[i] === _) parts[i] = rest.shift();

    return func(...parts);
  };
}

export default _;
