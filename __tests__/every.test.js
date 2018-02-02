import every from "../every";

describe("every", () => {
  it(`[2, 4, 5] + num % 1 === 0`, () => {
    // given
    const given = [2, 4, 5];
    const func = num => num % 1 === 0;

    // when
    const result = every(given, func);

    // then
    expect(result).toEqual(true);
  });

  // http://underscorejs.org/#every
  it(`[2, 4, 5] + num % 2 === 0`, () => {
    // given
    const given = [2, 4, 5];
    const func = num => num % 2 === 0;

    // when
    const result = every(given, func);

    // then
    expect(result).toEqual(false);
  });
});
