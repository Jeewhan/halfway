import go from "./go";
import filter from "../collection/filter";
import select from "../object/select";
import first from "../array/first";
import contains from "../collection/contains";
import _ from "../partial/partial";

// https://github.com/joeunha/functional-js-study2/issues/5
describe(`go`, () => {
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
      _(filter, _, ({ city }) => city === "seongnam"),
      _(filter, _, ({ age }) => age === 27),
      _(filter, _, ({ blood }) => blood === "O"),
      _(first, _),
      _(select, _, "name")
    );

    // then
    expect(result).toBe("JE");
  });

  // 부산과 서울시민 중에서 32세이면서 A형인 사람의 이름 ('ID')
  it(`users + condition`, () => {
    // given
    // users

    // when
    const result = go(
      users,
      _(filter, _, ({ city }) => contains(["busan", "seoul"], city)),
      _(filter, _, ({ age }) => age === 32),
      _(filter, _, ({ blood }) => blood === "A"),
      _(first, _),
      _(select, _, "name")
    );

    // then
    expect(result).toBe("ID");
  });
});