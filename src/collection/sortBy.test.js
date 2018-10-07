import sortBy from "./sortBy.mjs";

// http://underscorejs.org/#sortBy
describe(`sortBy`, () => {
  it(`[1, 2, 3, 4, 5, 6] + Math.sin`, () => {
    // given
    const given = [1, 2, 3, 4, 5, 6];

    // when
    const result = sortBy(given, Math.sin);

    // then
    expect(result).toEqual([5, 4, 6, 3, 1, 2]);
  });

  it(`Array + key`, () => {
    // given
    const stooges = [
      { name: "moe", age: 40 },
      { name: "larry", age: 50 },
      { name: "curly", age: 60 }
    ];

    // when
    const result = sortBy(stooges, "name");

    // then
    expect(result).toEqual([
      { name: "curly", age: 60 },
      { name: "larry", age: 50 },
      { name: "moe", age: 40 }
    ]);
  });
});
