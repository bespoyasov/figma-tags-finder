import { NodeId } from "../../types/figma";
import { TextCursorLocation, CompoundRangeLocator } from "../../types/indexing";

export function locatorNameFor(
  nodeId: NodeId,
  start: TextCursorLocation,
  end: TextCursorLocation
): CompoundRangeLocator {
  return `${nodeId}/${start}:${end}`;
}
