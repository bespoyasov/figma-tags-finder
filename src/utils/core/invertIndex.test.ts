import { IndexByRangeLocator, IndexByTextStyleId } from "../../types/indexing";
import { invertIndex } from "./invertIndex";

describe("utils > core > invertIndex", () => {
  it("should return an empty object if given an empty object", () => {
    expect(invertIndex({})).toEqual({});
  });

  it("should convert `IndexByRangeLocator` to `IndexByTextStyleId`", () => {
    const source: IndexByRangeLocator = {
      "nodeId/start1:end1": "style1",
      "nodeId/start2:end2": "style1",
      "nodeId/start3:end3": "style2",
    };

    const expected: IndexByTextStyleId = {
      style1: ["nodeId/start1:end1", "nodeId/start2:end2"],
      style2: ["nodeId/start3:end3"],
    };

    expect(invertIndex(source)).toEqual(expected);
  });
});
