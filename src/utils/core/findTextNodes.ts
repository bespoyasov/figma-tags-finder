import { isTextNode } from "./isTextNode";

export function findTextNodes(): TextNode[] {
  return figma.root.findAll(isTextNode) as TextNode[];
}
