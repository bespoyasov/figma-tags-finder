import { NodeId } from "../../types/figma";
import { CompoundRangeLocator, TextCursorRange } from "../../types/indexing";

export function parseLocatorName(
  name: CompoundRangeLocator
): [NodeId, TextCursorRange] {
  const [nodeId, locationRange] = name.split("/");
  return [nodeId, locationRange];
}
