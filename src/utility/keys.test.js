import keys from "./keys.mjs";

describe("keys", () => {
  it("object", () => {
    // given
    const given = { name: "tester" };

    // when
    const result = keys(given);

    // then
    expect(result).toEqual(["name"]);
  });

  it("array", () => {
    // given
    const given = [1, 2, 3];

    // when
    const result = keys(given);

    // then
    expect(result).toEqual(["0", "1", "2"]);
  });

  it("null", () => {
    // given
    const given = null;

    // when
    const result = keys(given);

    // then
    expect(result).toEqual([]);
  });

  it("undefined", () => {
    // given
    const given = undefined;

    // when
    const result = keys(given);

    // then
    expect(result).toEqual([]);
  });

  it("boolean", () => {
    // given
    const given = true;

    // when
    const result = keys(given);

    // then
    expect(result).toEqual([]);
  });

  it("string", () => {
    // given
    const given = "test";

    // when
    const result = keys(given);

    // then
    expect(result).toEqual([]);
  });
});
