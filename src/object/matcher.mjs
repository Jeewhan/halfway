import keys from "../utility/keys.mjs";

function matcher(attributes) {
  let i = -1;
  const ks = keys(attributes);
  const len = ks.length;

  return obj => {
    while (++i < len) if (obj[ks[i]] !== attributes[ks[i]]) return false;
    return true;
  };
}

export default matcher;
