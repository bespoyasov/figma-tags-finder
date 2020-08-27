import { Tag } from "../../types/tag";
import { parseCategory } from "./parseCategory";

export function sortByCategoryAndCount(a: Tag, b: Tag) {
  const aName = parseCategory(a.name);
  const bName = parseCategory(b.name);

  if (aName < bName) return -1;
  if (aName > bName) return 1;

  return b.count - a.count;
}
