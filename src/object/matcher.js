function matcher(attributes) {
  let i = -1;
  const keys = Object.keys(attributes);
  const len = keys.length;

  return obj => {
    while (++i < len) if (obj[keys[i]] !== attributes[keys[i]]) return false;
    return true;
  };
}

export default matcher;
