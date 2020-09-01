import { IndexReadyCallback } from "./types/indexing";
import { fromRangeBoundaries } from "./utils/core/fromRangeBoundaries";
import { isMixedStyle } from "./utils/core/isMixedStyle";
import { findTextNodes } from "./utils/core/findTextNodes";
import { invertIndex } from "./utils/core/invertIndex";
import { binarySearch } from "./binarySearch";

export function indexText(onReady: IndexReadyCallback) {
  const nodes = findTextNodes();
  const promises = nodes.map(processNode);

  Promise.all(promises).then((indices) => {
    const index = indices.reduce((total, part) => {
      return { ...total, ...part };
    }, {});

    onReady(invertIndex(index));
  });
}

async function processNode(node: TextNode) {
  const mileStones = !isMixedStyle(node.textStyleId)
    ? [node.characters.length]
    : await binarySearch(node);

  return fromRangeBoundaries(node, mileStones);
}
