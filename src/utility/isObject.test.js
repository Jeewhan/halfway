import isObject from "./isObject.mjs";

describe("isObject", () => {
  test("object", () => {
    // given
    const given = { name: "tester" };

    // when
    const result = isObject(given);

    // then
    expect(result).toBe(true);
  });

  test("array", () => {
    // given
    const given = [1, 2, 3];

    // when
    const result = isObject(given);

    // then
    expect(result).toBe(true);
  });

  test("null", () => {
    // given
    const given = null;

    // when
    const result = isObject(given);

    // then
    expect(result).toBe(false);
  });

  test("undefined", () => {
    // given
    const given = undefined;

    // when
    const result = isObject(given);

    // then
    expect(result).toBe(false);
  });

  test("boolean", () => {
    // given
    const given = true;

    // when
    const result = isObject(given);

    // then
    expect(result).toBe(false);
  });

  test("string", () => {
    // given
    const given = "test";

    // when
    const result = isObject(given);

    // then
    expect(result).toBe(false);
  });
});
