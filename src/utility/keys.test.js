import keys from "./keys.mjs";

describe("keys", () => {
  test("object", () => {
    // given
    const given = { name: "tester" };

    // when
    const result = keys(given);

    // then
    expect(result).toEqual(["name"]);
  });

  test("array", () => {
    // given
    const given = [1, 2, 3];

    // when
    const result = keys(given);

    // then
    expect(result).toEqual(["0", "1", "2"]);
  });

  test("null", () => {
    // given
    const given = null;

    // when
    const result = keys(given);

    // then
    expect(result).toEqual([]);
  });

  test("undefined", () => {
    // given
    const given = undefined;

    // when
    const result = keys(given);

    // then
    expect(result).toEqual([]);
  });

  test("boolean", () => {
    // given
    const given = true;

    // when
    const result = keys(given);

    // then
    expect(result).toEqual([]);
  });

  test("string", () => {
    // given
    const given = "test";

    // when
    const result = keys(given);

    // then
    expect(result).toEqual([]);
  });
});
