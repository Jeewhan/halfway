import _ from "../partial";
import select from "../select";

// https://github.com/joeunha/functional-js-study2/issues/5
describe(`partail`, () => {
  it(`object + _, "name"`, () => {
    // given
    const given = { name: "JM", age: 32, city: "busan", blood: "B" };

    // when
    const preparation = _(select, given, _);
    const result = preparation("name");

    // then
    expect(result).toEqual("JM");
  });

  it(`object + _, ["name", "age"]`, () => {
    // given
    const given = { name: "JM", age: 32, city: "busan", blood: "B" };

    // when
    const preparation = _(select, given, _);
    const result = preparation(["name", "age"]);

    // then
    expect(result).toEqual(["JM", 32]);
  });
});
