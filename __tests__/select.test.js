import select from "../select";

// https://github.com/joeunha/functional-js-study2/issues/5
describe(`select`, () => {
  it(`object + "name"`, () => {
    // given
    const given = { name: "JM", age: 32, city: "busan", blood: "B" };

    // when
    const result = select(given, "name");

    // then
    expect(result).toBe("JM");
  });

  it(`object + ["name", "age"]`, () => {
    // given
    const given = { name: "JM", age: 32, city: "busan", blood: "B" };

    // when
    const result = select(given, ["name", "age"]);

    // then
    expect(result).toEqual(["JM", 32]);
  });
});
