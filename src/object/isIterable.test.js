import isIterable from "./isIterable.mjs";

// String, Array, TypedArray, Map and Set
describe("isIterable", () => {
  let given;

  test("string", () => {
    // given
    given = "string";
  });

  test("array", () => {
    // given
    given = [];
  });

  test("map", () => {
    // given
    given = new Map();
  });

  test("set", () => {
    // given
    given = new Set();
  });

  afterEach(() => {
    // when
    const result = isIterable(given);

    // then
    expect(result).toBe(true);
  });
});
