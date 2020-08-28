import { TextCursorLocation, MileStones } from "./types/indexing";
import { hasMixedRange } from "./utils/core/hasMixedRange";
import { xor } from "./utils/core/xor";

export function binarySearch(
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
  const neighborToCheck = mixedLeftHalf ? middle - 1 : middle + 1;
  const neighborMixed = hasMixedRange(node, searchStart, neighborToCheck);

  const shouldAppendMileStone = xor(mixedLeftHalf, neighborMixed);
  const mileStone = mixedLeftHalf ? middle - 1 : middle;
  if (shouldAppendMileStone) mileStones.push(mileStone);

  if (mixedLeftHalf) {
    return !neighborMixed
      ? binarySearch(node, middle - 1, textEnd, mileStones)
      : binarySearch(node, searchStart, middle, mileStones);
  } else {
    return neighborMixed
      ? binarySearch(node, middle, textEnd, mileStones)
      : binarySearch(node, middle, searchEnd, mileStones);
  }
}
