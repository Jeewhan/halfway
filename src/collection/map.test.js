import map from "./map.mjs";

// http://underscorejs.org/#map
describe(`map`, () => {
  it(`[1, 2, 3] + num => num * 3`, () => {
    // given
    const given = [1, 2, 3];
    const func = num => num * 3;

    // when
    const result = map(given, func);

    // then
    // toEqual()은 동등성을 확인하는 반면에 toBe()는 정확히 같은 객체인지를 확인해 줍니다.
    // https://facebook.github.io/jest/docs/en/using-matchers.html
    expect(result).toEqual([3, 6, 9]);
  });

  it(`{one: 1, two: 2, three: 3} + (num, key) => num * 3`, () => {
    // given
    const given = { one: 1, two: 2, three: 3 };
    const func = num => num * 3;

    // when
    const result = map(given, func);

    // then
    expect(result).toEqual([3, 6, 9]);
  });
});
