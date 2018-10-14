function isIterable(target) {
  return target != null && Symbol.iterator in Object(target);
}

export default isIterable;
