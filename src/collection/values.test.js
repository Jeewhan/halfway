import values from "./values.mjs";
import map from "./map.mjs";

describe("values", () => {
  test("array", () => {
    // given
    const given = [1, 3, 5, 7, 9];

    // when
    const result = values(given);

    // then
    expect(result).toEqual([1, 3, 5, 7, 9]);
  });

  test("object", () => {
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
    const result = values(given[0]);

    // then
    expect(result).toEqual([1, "ID", 36]);
  });

  test("object + map", () => {
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
    const result = map(given, values);

    // then
    expect(result).toEqual([
      [1, "ID", 36],
      [2, "BJ", 32],
      [3, "JM", 32],
      [4, "PJ", 27],
      [5, "HA", 25],
      [6, "JE", 26],
      [7, "JI", 31],
      [8, "MP", 23]
    ]);
  });
});
