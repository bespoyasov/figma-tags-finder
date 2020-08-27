import { NodeId } from "../../types/figma";
import {
  TextCursorLocation,
  CompoundTextRangeLocator,
} from "../../types/indexing";

export function locatorNameFor(
  nodeId: NodeId,
  start: TextCursorLocation,
  end: TextCursorLocation
): CompoundTextRangeLocator {
  return `${nodeId}/${start}:${end}`;
}
