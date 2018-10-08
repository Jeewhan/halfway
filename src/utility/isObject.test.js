import isObject from "./isObject.mjs";

describe("isObject", () => {
  it("object", () => {
    // given
    const given = { name: "tester" };

    // when
    const result = isObject(given);

    // then
    expect(result).toBe(true);
  });

  it("array", () => {
    // given
    const given = [1, 2, 3];

    // when
    const result = isObject(given);

    // then
    expect(result).toBe(true);
  });

  it("null", () => {
    // given
    const given = null;

    // when
    const result = isObject(given);

    // then
    expect(result).toBe(false);
  });

  it("undefined", () => {
    // given
    const given = undefined;

    // when
    const result = isObject(given);

    // then
    expect(result).toBe(false);
  });

  it("boolean", () => {
    // given
    const given = true;

    // when
    const result = isObject(given);

    // then
    expect(result).toBe(false);
  });

  it("string", () => {
    // given
    const given = "test";

    // when
    const result = isObject(given);

    // then
    expect(result).toBe(false);
  });
});
