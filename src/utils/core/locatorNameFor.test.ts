import { locatorNameFor } from "./locatorNameFor";

describe("utils > core > locatorNameFor", () => {
  it("should combine locator name compounds into a string of a specified format", () => {
    const quoteRangeStart = 0;
    const quoteRangeEnd = 100;
    const result = locatorNameFor("nodeId", quoteRangeStart, quoteRangeEnd);
    expect(result).toEqual("nodeId/0:100");
  });
});
