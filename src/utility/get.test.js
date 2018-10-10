import get from "./get.mjs";

describe("get", () => {
  let given;

  beforeEach(() => {
    // given
    given = { id: 1, name: "ID", age: 36 };
  });

  test("2 parameter", () => {
    // when
    const result = get(given, "age");

    // then
    expect(result).toBe(36);
  });

  test("curryr", () => {
    // when
    const result = get("age")(given);

    // then
    expect(result).toBe(36);
  });
});
