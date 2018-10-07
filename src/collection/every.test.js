import every from "./every.mjs";
import filter from "./filter.mjs";
import contains from "./contains.mjs";
import go from "../pipe/go.mjs";
import first from "../array/first.mjs";
import select from "../object/select.mjs";
import _ from "../partial/partial.mjs";

describe("every", () => {
  it(`[2, 4, 5] + num % 1 === 0`, () => {
    // given
    const given = [2, 4, 5];
    const func = num => num % 1 === 0;

    // when
    const result = every(given, func);

    // then
    expect(result).toBe(true);
  });

  // http://underscorejs.org/#every
  it(`[2, 4, 5] + num % 2 === 0`, () => {
    // given
    const given = [2, 4, 5];
    const func = num => num % 2 === 0;

    // when
    const result = every(given, func);

    // then
    expect(result).toBe(false);
  });

  // https://github.com/joeunha/functional-js-study2/issues/5
  // 도시(city) / 나이(age) / 혈액형(blood)을 배열로 넣으면 해당하는 사람을 찾는 user_filter 함수 완성하기
  it(`user_filter function`, () => {
    // given
    const users = [
      { name: "ID", age: 32, city: "seoul", blood: "A" },
      { name: "BJ", age: 31, city: "seoul", blood: "O" },
      { name: "JM", age: 32, city: "busan", blood: "B" },
      { name: "PJ", age: 27, city: "seongnam", blood: "B" },
      { name: "HA", age: 27, city: "seoul", blood: "O" },
      { name: "JE", age: 27, city: "seongnam", blood: "O" },
      { name: "JI", age: 32, city: "seongnam", blood: "A" },
      { name: "MP", age: 28, city: "busan", blood: "O" },
      { name: "JY", age: 31, city: "seoul", blood: "AB" },
      { name: "TH", age: 27, city: "busan", blood: "O" }
    ];
    const cities = ["busan", "seoul"];
    const ages = [32];
    const bloods = ["B"];
    const user_filter = (cities, ages, bloods) => given =>
      filter(given, ({ city, age, blood }) =>
        every([
          contains(cities, city),
          contains(ages, age),
          contains(bloods, blood)
        ])
      );

    // when
    const result = go(
      users,
      user_filter(cities, ages, bloods),
      _(first, _),
      _(select, _, "name")
    );

    // then
    expect(result).toEqual("JM");
  });
});
