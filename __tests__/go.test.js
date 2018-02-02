import go from "../go";
import filter from "../filter";
import select from "../select";
import first from "../first";
import contains from "../contains";

// https://github.com/joeunha/functional-js-study2/issues/5
describe(`select`, () => {
  let users;

  beforeEach(() => {
    users = [
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
  });
  // 성남시민 중에서 27세이면서 O형인 사람의 이름 ('JE')
  it(`users + condition`, () => {
    // given
    // users

    // when
    const result = go(
      users,
      filter(({ city }) => city === "seongnam"),
      filter(({ age }) => age === 27),
      filter(({ blood }) => blood === "O"),
      first,
      select("name")
    );

    // then
    expect(result).toEqual("JE");
  });

  // 부산과 서울시민 중에서 32세이면서 A형인 사람의 이름 ('ID')
  it(`users + condition`, () => {
    // given
    // users

    // when
    const result = go(
      users,
      filter(({ city }) => contains(["busan", "seoul"], city)),
      filter(({ age }) => age === 32),
      filter(({ blood }) => blood === "A"),
      first,
      select("name")
    );

    // then
    expect(result).toEqual("ID");
  });
});
