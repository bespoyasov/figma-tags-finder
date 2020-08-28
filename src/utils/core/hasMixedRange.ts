import { TextCursorLocation } from "../../types/indexing";
import { isMixedStyle } from "./isMixedStyle";

type IsMixed = boolean;

export function hasMixedRange(
  node: TextNode,
  from: TextCursorLocation,
  to: TextCursorLocation
): IsMixed {
  const styleId = node.getRangeTextStyleId(from, to);
  return isMixedStyle(styleId);
}
