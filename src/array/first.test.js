import first from "./first.mjs";

describe("first", () => {
  test(`[5, 4, 3, 2, 1]`, () => {
    // given
    const given = [5, 4, 3, 2, 1];

    // when
    const result = first(given);

    // then
    expect(result).toBe(5);
  });

  test(`[5, 4, 3, 2, 1] + 3`, () => {
    // given
    const given = [5, 4, 3, 2, 1];
    const n = 3;

    // when
    const result = first(given, n);

    // then
    expect(result).toEqual([5, 4, 3]);
  });
});
