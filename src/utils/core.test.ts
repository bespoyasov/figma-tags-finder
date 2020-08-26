import { extractGroupName, locatorNameFor } from "./core";

function assureType<TType>(entity: unknown): TType {
  return <TType>entity;
}

describe("utils > core > extractGroupName", () => {
  it("should return a string of characters from the start to the first line-break", () => {
    const nodeStub = assureType<TextNode>({ characters: `test\nstring` });
    expect(extractGroupName(nodeStub)).toEqual("test");
  });

  it("should return the same string if there are no line-breaks", () => {
    const nodeStub = assureType<TextNode>({ characters: `test string` });
    expect(extractGroupName(nodeStub)).toEqual("test string");
  });
});

describe("utils > core > locatorNameFor", () => {
  it("should combine locator name compounds into a string of a specified format", () => {
    const quoteRangeStart = 0;
    const quoteRangeEnd = 100;
    const result = locatorNameFor("nodeId", quoteRangeStart, quoteRangeEnd);
    expect(result).toEqual("nodeId/0:100");
  });
});
