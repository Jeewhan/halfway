import isMatch from "../isMatch";

// http://underscorejs.org/#isMatch
describe(`isMatch`, () => {
  it(`{ name: 'moe', age: 32 } + { age: 32 }`, () => {
    // given
    const given = { name: "moe", age: 32 };
    const condition = { age: 32 };

    // when
    const result = isMatch(given, condition);

    // then
    expect(result).toBe(true);
  });
});
