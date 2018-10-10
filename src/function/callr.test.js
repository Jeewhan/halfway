import callr from "./callr.mjs";

describe(`callr`, () => {
  test(`[1, 2, 3] + console.log`, () => {
    const log = jest.spyOn(console, `log`);

    // given
    const given = [1, 2, 3];

    // when
    callr(given, console.log);

    // then
    expect(log).toHaveBeenCalledWith(given);
  });
});
