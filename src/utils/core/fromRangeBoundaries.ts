import { RangeRightBoundary, IndexByRangeLocator } from "../../types/indexing";
import { locatorNameFor } from "./locatorNameFor";

export function fromRangeBoundaries(
  node: TextNode,
  boundaries: RangeRightBoundary[]
): IndexByRangeLocator {
  const index: IndexByRangeLocator = {};
  const nodeId = node.id;
  let startPoint = 0;

  boundaries.forEach((boundary) => {
    const styleId = <string>node.getRangeTextStyleId(startPoint, boundary);
    index[locatorNameFor(nodeId, startPoint, boundary)] = styleId;
    startPoint = boundary;
  });

  return index;
}
