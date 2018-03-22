import curryr from "./curryr";
import filter from "../collection/filter";

// https://github.com/joeunha/functional-js-study2/issues/5
describe(`curryr`, () => {
  it(`filter + collection + predicate`, () => {
    // given
    const given = [1, 2, 3, 4, 5, 6];

    // when
    const result = curryr(filter)(given, num => num % 2 === 0);

    // then
    expect(result).toEqual([2, 4, 6]);
  });

  it(`filter + predicate, collection`, () => {
    // given
    const given = [1, 2, 3, 4, 5, 6];
    const preparation = curryr(filter)(num => num % 2 === 0);

    // when
    const result = preparation(given);

    // then
    expect(result).toEqual([2, 4, 6]);
  });
});
