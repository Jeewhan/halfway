import findIndex from "./findIndex.mjs";

// http://underscorejs.org/#findIndex
describe("findIndex", () => {
  let isPrime;

  beforeEach(() => {
    isPrime = number => {
      let i = 1;

      while (++i < number ** 0.5 + 1) {
        if (!(number % i)) return false;
      }

      return true;
    };
  });

  test("[4, 6, 8, 12] + isPrime", () => {
    // given
    const given = [4, 6, 8, 12];

    // when
    const result = findIndex(given, isPrime);

    // then
    expect(result).toBe(-1);
  });

  test("[4, 6, 7, 12] + isPrime", () => {
    // given
    const given = [4, 6, 7, 12];

    // when
    const result = findIndex(given, isPrime);

    // then
    expect(result).toBe(2);
  });
});
