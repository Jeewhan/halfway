import find from "./find.mjs";

describe(`find`, () => {
  // http://underscorejs.org/#find
  test(`[1, 2, 3, 4, 5, 6] + num => num % 2 === 0`, () => {
    // given
    const given = [1, 2, 3, 4, 5, 6];
    const func = num => num % 2 === 0;

    // when
    const result = find(given, func);

    // then
    expect(result).toEqual(2);
  });

  let users;

  beforeEach(() => {
    users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
      { user: "pebbles", age: 1, active: true }
    ];
  });

  // https://lodash.com/docs/4.17.4#find
  test(`Array + ({ age }) => age < 40`, () => {
    // given
    // users

    // when
    const result1 = find(users, ({ age }) => age < 40);

    // then
    expect(result1).toEqual({ user: "barney", age: 36, active: true });
  });

  test(`Array + Object`, () => {
    // given
    // users

    // when
    const result2 = find(users, { age: 1, active: true });

    // then
    expect(result2).toEqual({ user: "pebbles", age: 1, active: true });
  });
});
