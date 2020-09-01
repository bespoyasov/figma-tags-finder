import { assureType, Global } from "../infrastructure";
import { hasMixedRange } from "./hasMixedRange";

describe("utils > core > hasMixedRange", () => {
  assureType<Global>(global).figma = { mixed: 0 };

  const nodeMock = assureType<TextNode>({
    getRangeTextStyleId(from, to) {
      return to <= 10 ? figma.mixed : "styleId";
    },
  });

  it("should return true if a given range has mixed text styles", () => {
    expect(hasMixedRange(nodeMock, 0, 10)).toEqual(true);
  });

  it("should return false if a given range has simple text style", () =>
    expect(hasMixedRange(nodeMock, 10, 100)).toEqual(false));
});
