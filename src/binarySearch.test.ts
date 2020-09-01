import { assureType, Global } from "./utils/infrastructure";
import { binarySearch } from "./binarySearch";

const waitMock = jest.fn();
jest.mock("./utils/core/wait", () => ({ wait: () => waitMock() }));

describe("binarySearch", () => {
  beforeEach(() => jest.clearAllMocks());
  afterEach(() => jest.restoreAllMocks());

  assureType<Global>(global).figma = { mixed: 0 };

  const expectedMilestones = [25, 50, 75];
  const node = assureType<TextNode>({
    characters:
      "Lorem ipsum dolor amet, consectetur adipiscing elit. Nunc eget dictum enim. Etiam quam enim, auctor.",

    /**
     * It uses `from` inclusive and `to` exclusive, so
     * - style1: [0...24] or [0...25)
     * - style2: [25...49] or [25...50)
     * - style3: [50...74] or [50...75)
     * - style3: [75...99] or [75...100)
     */
    getRangeTextStyleId(from, to) {
      if (from < 24 && to <= 25) return "style1";
      if (from >= 25 && from < 50 && to <= 50) return "style2";
      if (from >= 50 && from < 75 && to <= 75) return "style3";
      if (from >= 75) return "style3";
      return figma.mixed;
    },
  });

  it("should return the milestones array if start position >= end position (base case)", async () => {
    const milestones = [1, 2, 3];
    const result = await binarySearch(node, 10, 10, milestones);
    expect(result).toEqual(milestones);
  });

  it("should return the milestones array if a given range is not mixed (base case)", async () => {
    const milestones = [1, 2, 3];
    const result = await binarySearch(node, 0, 1, milestones);
    expect(result).toEqual(milestones);
  });

  it("should find all the style change points", async () => {
    const result = await binarySearch(node);
    expect(result).toEqual(expectedMilestones);
  });

  it("should postpone every odd call not to freeze the UI", async () => {
    const iterations = 10;

    expect(waitMock).not.toHaveBeenCalled();

    await binarySearch(node);
    expect(waitMock).toHaveBeenCalledTimes(iterations / 2);
  });
});
