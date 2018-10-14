import isNull from "./isNull.mjs";

describe("isNull", () => {
  describe("truthy value", () => {
    let given;

    test("{}", () => {
      // given
      given = {};
    });

    test("[]", () => {
      // given
      given = [];
    });

    test("true", () => {
      // given
      given = true;
    });

    test("1", () => {
      // given
      given = 1;
    });

    test("-1", () => {
      // given
      given = -1;
    });

    test("'test'", () => {
      // given
      given = "test";
    });

    afterEach(() => {
      // when
      const result = isNull(given);

      // then
      expect(result).toBe(false);
    });
  });

  describe("falsy value", () => {
    // false , 0 , empty strings '' and "" , NaN , undefined , and null
    test("false", () => {
      // given
      const given = false;

      // when
      const result = isNull(given);

      // then
      expect(result).toBe(false);
    });

    test("0", () => {
      // given
      const given = 0;

      // when
      const result = isNull(given);

      // then
      expect(result).toBe(false);
    });

    test('""', () => {
      // given
      const given = "";

      // when
      const result = isNull(given);

      // then
      expect(result).toBe(false);
    });

    test("NaN", () => {
      // given
      const given = NaN;

      // when
      const result = isNull(given);

      // then
      expect(result).toBe(false);
    });

    test("undefined", () => {
      // given
      const given = undefined;

      // when
      const result = isNull(given);

      // then
      expect(result).toBe(true);
    });

    test("null", () => {
      // given
      const given = null;

      // when
      const result = isNull(given);

      // then
      expect(result).toBe(true);
    });
  });
});
