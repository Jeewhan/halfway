import entries from "./entries.mjs";

describe("entries", () => {
  test(`["a", "b", "c"]`, () => {
    // given
    const given = ["a", "b", "c"];

    // when
    const result = entries(given)[Symbol.iterator]();

    // then
    expect(result.next().value).toEqual(["a", 0]);
    expect(result.next().value).toEqual(["b", 1]);
    expect(result.next().value).toEqual(["c", 2]);
  });
});
