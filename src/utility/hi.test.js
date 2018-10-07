import hi from "./hi.mjs";

// https://marpple.github.io/partial.js/docs/#hi
describe("hi", () => {
  it("object + hi", () => {
    const log = jest.spyOn(console, `log`);

    // given
    const given = hi({ name: "moe" }); // {name: 'moe'}

    // when
    hi(given);

    // then
    expect(log).toHaveBeenCalledWith(given);
  });
});
