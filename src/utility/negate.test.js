import negate from "./negate.mjs";
import identity from "./identity.mjs";

describe("negate", () => {
  test("truthy -> falsy", () => {
    // given
    const given = 1;

    // when
    const result = negate(identity)(given);

    // then
    expect(result).toBe(false);
  });

  test("falsy -> truthy", () => {
    // given
    const given = null;

    // when
    const result = negate(identity)(given);

    // then
    expect(result).toBe(true);
  });
});
