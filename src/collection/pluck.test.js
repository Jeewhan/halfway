import pluck from "./pluck.mjs";

describe("pluck", () => {
  test("name", () => {
    // given
    const given = [
      { id: 1, name: "ID", age: 36 },
      { id: 2, name: "BJ", age: 32 },
      { id: 3, name: "JM", age: 32 },
      { id: 4, name: "PJ", age: 27 },
      { id: 5, name: "HA", age: 25 },
      { id: 6, name: "JE", age: 26 },
      { id: 7, name: "JI", age: 31 },
      { id: 8, name: "MP", age: 23 }
    ];

    // when
    const result = pluck(given, "name");

    // then
    expect(result).toEqual(["ID", "BJ", "JM", "PJ", "HA", "JE", "JI", "MP"]);
  });
});
