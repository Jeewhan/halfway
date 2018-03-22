import pipe from "./pipe";

describe("pipe", () => {
  it("only one parameter", () => {
    // given
    const add10 = num => num + 10;
    const add30 = pipe(add10, add10, add10);

    // when
    const result1 = add30(5); // [4] 만들어진 함수로 결과를 만듭니다.
    const result2 = add30(13); // [5] pipe로 만들어진 함수는 재사용 가능합니다.

    // then
    expect(result1).toBe(35);
    expect(result2).toBe(43);
  });

  it.skip("parameters", () => {
    // given
    const sum = (a, b) => a + b;
    const square = a => a * a;

    // when
    const f = pipe(sum, square, square);
    const result = f(1, 2);

    // then
    expect(result).toBe(81);
  });
});
