import { Quote } from "./types/quote";
import { FigmaType } from "./types/figma";
import { assureType } from "./utils/infrastructure";
import { navigateToQuote } from "./navigateToQuote";

const quote: Quote = {
  original: "text",
  extended: "the quote text with some context around",
  group: "group name",
};

const targetTextNode = ({
  width: 1000,
  height: 5000,
  characters: "the whole text of the quote",
  absoluteTransform: [
    [0, 0, 100],
    [0, 0, 500],
  ],
} as any) as TextNode;

jest.mock("./utils/core", () => ({
  findTextNodes: () => [targetTextNode],
}));

const zoomMock = jest.fn();
const centerMock = jest.fn();

const figmaMock = assureType<FigmaType>({
  viewport: {
    set zoom(value) {
      zoomMock(value);
    },
    set center(value) {
      centerMock(value);
    },
  },
});

describe("navigateToQuote", () => {
  beforeEach(() => jest.resetAllMocks());
  afterAll(() => jest.restoreAllMocks());

  it("should do nothing if a node with a given quote is not found", () => {
    const cannotBeFound = { ...quote, original: "not found" };
    navigateToQuote(cannotBeFound, { framework: figmaMock });
    expect(zoomMock).not.toHaveBeenCalled();
    expect(centerMock).not.toHaveBeenCalled();
  });

  it("should find an approximate position of a given quote on the screen", () => {
    navigateToQuote(quote, { framework: figmaMock });
    expect(centerMock).toHaveBeenCalledWith({ x: 600, y: 2452 });
  });

  it("should zoom viewport to 1.2 if a quote has been found", () => {
    navigateToQuote(quote, { framework: figmaMock });
    expect(zoomMock).toHaveBeenCalledWith(1.2);
  });
});
