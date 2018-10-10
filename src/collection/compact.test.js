import compact from "./compact.mjs";

describe("compact", () => {
  test("only truthy", () => {
    // given
    const given = [1, 2, 3, 4, 5];

    // when
    const result = compact(given);

    // then
    expect(result).toEqual(given);
  });

  test("only falsy", () => {
    // given
    const given = [null, undefined, false, 0];

    // when
    const result = compact(given);

    // then
    expect(result).toEqual([]);
  });
});
