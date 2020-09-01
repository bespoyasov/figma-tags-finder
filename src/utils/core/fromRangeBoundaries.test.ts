import { assureType } from "../infrastructure";
import { fromRangeBoundaries } from "./fromRangeBoundaries";

describe("utils > core > fromRangeBoundaries", () => {
  const nodeMock = assureType<TextNode>({
    id: "nodeId",
    getRangeTextStyleId(start: number) {
      if (start === 0) return "style1";
      if (start === 2) return "style2";
      return "style3";
    },
  });

  it("should return an empty object if given no range boundaries", () => {
    expect(fromRangeBoundaries(nodeMock, [])).toEqual({});
  });

  it("should populate the returned object with key-value records for each range boundary where key is the locator name and value is range style id", () => {
    const result = fromRangeBoundaries(nodeMock, [2, 4, 5]);
    expect(result).toEqual({
      "nodeId/0:2": "style1",
      "nodeId/2:4": "style2",
      "nodeId/4:5": "style3",
    });
  });
});
