import each from "./each";

// http://underscorejs.org/#each
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

  it(`{one: 1, two: 2, three: 3}`, () => {
    // given
    const given = { one: 1, two: 2, three: 3 };

    // when
    each(given, log);

    // then
    expect(log).toHaveBeenCalledWith(given.one, "one", given);
    expect(log).toHaveBeenCalledWith(given.two, "two", given);
    expect(log).toHaveBeenCalledWith(given.three, "three", given);
  });
});
