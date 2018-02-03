import callr from "../callr";

describe(`callr`, () => {
  it(`[1, 2, 3] + console.log`, () => {
    const log = jest.spyOn(console, `log`);

    // given
    const given = [1, 2, 3];

    // when
    callr(given, console.log);

    // then
    expect(log).toHaveBeenCalledWith(given);
  });
});
