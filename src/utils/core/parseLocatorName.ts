import { NodeId } from "../../types/figma";
import {
  CompoundTextRangeLocator,
  TextCursorRange,
} from "../../types/indexing";

export function parseLocatorName(
  name: CompoundTextRangeLocator
): [NodeId, TextCursorRange] {
  const [nodeId, locationRange] = name.split("/");
  return [nodeId, locationRange];
}
