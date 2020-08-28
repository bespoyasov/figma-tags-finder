import { IndexReadyCallback } from "./types/indexing";
import { fromRangeBoundaries } from "./utils/core/fromRangeBoundaries";
import { isMixedStyle } from "./utils/core/isMixedStyle";
import { findTextNodes } from "./utils/core/findTextNodes";
import { invertIndex } from "./utils/core/invertIndex";
import { binarySearch } from "./binarySearch";

export function indexText(onReady: IndexReadyCallback) {
  const nodes = findTextNodes();
  let index = {};

  for (const node of nodes) {
    const mileStones = !isMixedStyle(node.textStyleId)
      ? [node.characters.length]
      : binarySearch(node);

    index = { ...index, ...fromRangeBoundaries(node, mileStones) };
  }

  onReady(invertIndex(index));
}
