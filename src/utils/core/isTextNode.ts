export function isTextNode(node: PageNode | SceneNode): node is TextNode {
  return node.type === "TEXT";
}
