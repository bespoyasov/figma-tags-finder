import { TextCursorLocation, MileStones } from "./types/indexing";
import { hasMixedRange } from "./utils/core/hasMixedRange";

export function applyBinarySearch(
  node: TextNode,
  searchStart: TextCursorLocation = 0,
  searchEnd: TextCursorLocation = node.characters.length,
  mileStones: MileStones = []
): MileStones {
  const textEnd = node.characters.length;
  const middle = searchStart + Math.ceil((searchEnd - searchStart) / 2);

  if (searchStart >= middle) return mileStones;
  if (!hasMixedRange(node, searchStart, searchEnd)) return mileStones;

  if (hasMixedRange(node, searchStart, middle)) {
    const prev = middle - 1;
    const prevMixed = hasMixedRange(node, searchStart, prev);

    if (!prevMixed) {
      mileStones.push(prev);
      return applyBinarySearch(node, prev, textEnd, mileStones);
    }

    return applyBinarySearch(node, searchStart, middle, mileStones);
  } else {
    const next = middle + 1;
    const nextMixed = hasMixedRange(node, searchStart, next);

    if (nextMixed) {
      mileStones.push(middle);
      return applyBinarySearch(node, middle, textEnd, mileStones);
    }

    return applyBinarySearch(node, middle, searchEnd, mileStones);
  }
}
