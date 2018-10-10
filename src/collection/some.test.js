import some from "./some.mjs";

describe("some", () => {
  test(`[2, 4, 5] + num % 1 === 0`, () => {
    // given
    const given = [2, 4, 5];
    const func = num => num % 1 === 0;

    // when
    const result = some(given, func);

    // then
    expect(result).toBe(true);
  });

  // http://underscorejs.org/#every
  test(`[2, 4, 5] + num % 2 === 0`, () => {
    // given
    const given = [2, 4, 5];
    const func = num => num % 2 === 0;

    // when
    const result = some(given, func);

    // then
    expect(result).toBe(true);
  });
});
