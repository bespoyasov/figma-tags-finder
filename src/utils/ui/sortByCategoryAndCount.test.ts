import { Tag } from "../../types/tag";
import { sortByCategoryAndCount } from "./sortByCategoryAndCount";

describe("utils > ui > sortByCategoryAndCount", () => {
  const base: Tag = {
    id: "",
    name: "category/style",
    count: 0,
  };

  it("should sort tags by category first, in alphabet order", () => {
    const a: Tag = { ...base, name: "categoryA/style" };
    const b: Tag = { ...base, name: "categoryB/style" };
    expect(sortByCategoryAndCount(a, b)).toEqual(-1);
  });

  it("should sort tags by count, decreasing, if categories are the same", () => {
    const a: Tag = { ...base, count: 1 };
    const b: Tag = { ...base, count: 2 };
    expect(sortByCategoryAndCount(a, b)).toEqual(1);
  });
});
