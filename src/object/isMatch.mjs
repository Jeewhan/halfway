function isMatch(obj, condition) {
  const key = Object.keys(condition)[0];
  return obj[key] === condition[key];
}

export default isMatch;
