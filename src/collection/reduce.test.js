import reduce from "./reduce.mjs";

describe(`reduce`, () => {
  // http://underscorejs.org/#reduce
  test(`[1, 2, 3] + subtotal`, () => {
    // given
    const given = [1, 2, 3];
    const initValue = 0;

    // when
    const result = reduce(given, (result, value) => result + value, initValue);

    // then
    expect(result).toBe(6);
  });

  // https://lodash.com/docs/4.17.4#reduce
  test(`{ 'a': 1, 'b': 2, 'c': 1 } + extract by key`, () => {
    // given
    const given = { a: 1, b: 2, c: 1 };
    const initValue = {};

    // when
    const result = reduce(
      given,
      (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
      },
      initValue
    );

    // then
    expect(result).toEqual({ "1": ["a", "c"], "2": ["b"] });
  });
});
