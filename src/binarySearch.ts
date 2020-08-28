import { TextCursorLocation, MileStones } from "./types/indexing";
import { hasMixedRange } from "./utils/core/hasMixedRange";

function xor(a: unknown, b: unknown): boolean {
  return (!!a && !b) || (!a && !!b);
}

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

  const mixedLeftHalf = hasMixedRange(node, searchStart, middle);
  const neighbor = mixedLeftHalf ? middle - 1 : middle + 1;
  const neighborMixed = hasMixedRange(node, searchStart, neighbor);

  const shouldAppendMileStone = xor(mixedLeftHalf, neighborMixed);
  const mileStone = mixedLeftHalf ? middle - 1 : middle;
  if (shouldAppendMileStone) mileStones.push(mileStone);

  if (mixedLeftHalf) {
    return !neighborMixed
      ? applyBinarySearch(node, middle - 1, textEnd, mileStones)
      : applyBinarySearch(node, searchStart, middle, mileStones);
  } else {
    return neighborMixed
      ? applyBinarySearch(node, middle, textEnd, mileStones)
      : applyBinarySearch(node, middle, searchEnd, mileStones);
  }
}
