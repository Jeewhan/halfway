import negate from "./negate.mjs";
import identity from "./identity.mjs";

describe("negate", () => {
  it("truthy -> falsy", () => {
    // given
    const given = 1;

    // when
    const result = negate(identity)(given);

    // then
    expect(result).toBe(false);
  });

  it("falsy -> truthy", () => {
    // given
    const given = null;

    // when
    const result = negate(identity)(given);

    // then
    expect(result).toBe(true);
  });
});
