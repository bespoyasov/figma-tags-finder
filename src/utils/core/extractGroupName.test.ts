import { extractGroupName } from "./extractGroupName";
import { assureType } from "../infrastructure";

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
