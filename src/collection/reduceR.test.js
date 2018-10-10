import reduceR from "./reduceR.mjs";

describe("reduceR", () => {
  test("2d Array", () => {
    // given
    const list = [[0, 1], [2, 3], [4, 5]];

    // when
    const result = reduceR(list, (a, b) => a.concat(b));

    // then
    expect(result).toEqual([4, 5, 2, 3, 0, 1]);
  });
});
