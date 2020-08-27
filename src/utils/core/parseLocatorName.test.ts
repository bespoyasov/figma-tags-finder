import { parseLocatorName } from "./parseLocatorName";

describe("utils > core > parseLocatorName", () => {
  it("should split a locator name into a node ID and a quote range", () => {
    const locator = "nodeId/0:100";
    expect(parseLocatorName(locator)).toEqual(["nodeId", "0:100"]);
  });
});
