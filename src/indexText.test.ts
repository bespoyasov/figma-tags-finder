import { indexText } from "./indexText";

const plainTextNode = { id: "1", textStyleId: "text" };

const exactRange = (range: number[], from: number, to: number): boolean =>
  from === range[0] && to === range[1];

const range1 = [0, 7];
const mixedTextNode = {
  id: "2",
  textStyleId: "mixed",
  characters: "Short string",
  getRangeTextStyleId: (from, to) =>
    exactRange(range1, from, to) ? "mixed" : "text",
};

const range2 = [0, 3];
const range3 = [2, 7];
const mixedTextNodeWithMultipleStyleChanges = {
  ...mixedTextNode,
  id: "3",
  getRangeTextStyleId: (from, to) =>
    exactRange(range2, from, to) || exactRange(range3, from, to)
      ? "mixed"
      : "text",
};

let textNodes = [];

jest.mock("./utils/core/isMixedStyle", () => ({
  isMixedStyle: (style) => style === "mixed",
}));

jest.mock("./utils/core/findTextNodes", () => ({
  findTextNodes: () => textNodes,
}));

jest.useFakeTimers();

describe("indexText", () => {
  afterEach(() => {
    textNodes = [];
  });

  afterAll(() => {
    jest.restoreAllMocks();
    jest.clearAllTimers();
  });

  it("should index text from plain text nodes", async () => {
    textNodes = [plainTextNode];
    const onReady = jest.fn();

    await indexText(onReady);
    expect(onReady).toHaveBeenCalledWith({ text: ["1"] });
  });

  it("should only keep IDs of unique text nodes", async () => {
    textNodes = [plainTextNode, plainTextNode];
    const onReady = jest.fn();

    await indexText(onReady);
    expect(onReady).toHaveBeenCalledWith({ text: ["1"] });
  });

  it("should index text from mixed text nodes", async () => {
    textNodes = [mixedTextNode];
    const onReady = jest.fn();

    await indexText(onReady);
    jest.runAllTimers();

    const [start, end] = range1;
    const nodeId = mixedTextNode.id;
    const locator = `${nodeId}/${start}:${end - 1}`;
    expect(onReady).toHaveBeenCalledWith({ text: [locator] });
  });

  it("should keep as many entries as many text styles changes there are", async () => {
    textNodes = [mixedTextNodeWithMultipleStyleChanges];
    const onReady = jest.fn();

    await indexText(onReady);
    jest.runAllTimers();

    const [start1, end1] = range2;
    const [start2, end2] = range3;
    const nodeId = mixedTextNodeWithMultipleStyleChanges.id;
    const locator1 = `${nodeId}/${start1}:${end1 - 1}`;
    const locator2 = `${nodeId}/${start2}:${end2 - 1}`;
    expect(onReady).toHaveBeenCalledWith({ text: [locator1, locator2] });
  });

  it("should use batching if text size is bigger than batch size", async () => {
    textNodes = [mixedTextNode];
    const onReady = jest.fn();
    const batchSize = 10;

    await indexText(onReady, batchSize);

    const iterations = Math.ceil(mixedTextNode.characters.length / batchSize);
    for (let i = 0; i < iterations; i++) {
      expect(jest.getTimerCount()).toEqual(1);
      jest.runOnlyPendingTimers();
    }

    expect(jest.getTimerCount()).toEqual(0);
  });
});
