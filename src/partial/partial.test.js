import _ from "./partial.mjs";
import select from "../object/select.mjs";

// https://github.com/joeunha/functional-js-study2/issues/5
describe(`partial`, () => {
  test(`object + _, "name"`, () => {
    // given
    const given = { name: "JM", age: 32, city: "busan", blood: "B" };

    // when
    const preparation = _(select, given, _);
    const result = preparation("name");

    // then
    expect(result).toBe("JM");
  });

  test(`object + _, ["name", "age"]`, () => {
    // given
    const given = { name: "JM", age: 32, city: "busan", blood: "B" };

    // when
    const preparation = _(select, given, _);
    const result = preparation(["name", "age"]);

    // then
    expect(result).toEqual(["JM", 32]);
  });
});
