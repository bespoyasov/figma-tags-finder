import { IndexByRangeLocator, IndexByTextStyleId } from "../../types/indexing";

export function invertIndex(source: IndexByRangeLocator): IndexByTextStyleId {
  const locatorIds = Object.keys(source);
  const inverted: IndexByTextStyleId = {};

  locatorIds.forEach((locator) => {
    const value = source[locator];
    inverted[value] = inverted[value] || [];
    inverted[value].push(locator);
  });

  return inverted;
}
