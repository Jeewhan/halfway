import each from "../each";

describe(`each`, () => {
  const log = jest.spyOn(console, `log`);

  it(`[1, 2, 3] + console.log`, () => {
    // given
    const given = [1, 2, 3];

    // when
    each(given, log);

    // then
    expect(log).toHaveBeenCalledWith(given[0], 0, given);
    expect(log).toHaveBeenCalledWith(given[1], 1, given);
    expect(log).toHaveBeenCalledWith(given[2], 2, given);
  });

  it(`{ first: "가", second: "나", third: "다" }`, () => {
    // given
    const given = { first: "가", second: "나", third: "다" };

    // when
    each(given, log);

    // then
    expect(log).toHaveBeenCalledWith(given.first, "first", given);
    expect(log).toHaveBeenCalledWith(given.second, "second", given);
    expect(log).toHaveBeenCalledWith(given.third, "third", given);
  });
});
