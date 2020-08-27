import { parseCategory } from "./parseCategory";

describe("utils > ui > parseCategory", () => {
  it("should return a string before the first forward slash and trim it", () => {
    expect(parseCategory(" category/style")).toEqual("category");
  });
});
