import { textLocatorToQuote } from "./textLocatorToQuote";
import { assureType } from "./utils/infrastructure";
import { FigmaType } from "./types/figma";

const targetTextNode = assureType<TextNode>({
  characters: "Group name\nThe rest of the text",
});

const figmaMock = assureType<FigmaType>({
  getNodeById: () => targetTextNode,
});

const di = { framework: figmaMock };

describe("textLocatorToQuote", () => {
  it("should return only original text and group name if given a not mixed text node ID", () => {
    const result = textLocatorToQuote("nodeIdWithoutQuoteRange", 0, di);
    expect(result).toEqual({
      group: "Group name",
      original: "Group name\nThe rest of the text",
    });
  });

  it("should return a group name, an original text and an extended text if given mixed node ID", () => {
    const result = textLocatorToQuote("nodeID/11:22", 0, di);
    expect(result).toEqual({
      group: "Group name",
      original: "The rest of",
      extended: "The rest of",
    });
  });

  it("should add 5 characters on each side of the extended text", () => {
    const result = textLocatorToQuote("nodeID/11:22", 11, di);
    expect(result.extended).toEqual("Group name\nThe rest of the text");
  });
});
