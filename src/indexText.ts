import { isMixedStyle, locatorNameFor, findTextNodes } from "./utils/core";
import {
  IndexReadyCallback,
  IndexBatchSize,
  IndexByRangeLocator,
  TextCursorLocation,
  IndexByTextStyleId,
} from "./types/indexing";

export async function indexText(
  onReady: IndexReadyCallback,
  batchSize: IndexBatchSize = 100
): Promise<void> {
  const index: IndexByRangeLocator = {};
  const nodes = findTextNodes();
  const total = nodes.length;
  let processed = 0;

  for (const node of nodes) {
    if (!isMixedStyle(node.textStyleId)) indexPlainText(node);
    else indexMixedText(node);
  }

  function indexPlainText(node: TextNode): void {
    const { id, textStyleId } = node;
    index[id] = textStyleId as string;
    onFinishIndexing(index);
  }

  function indexMixedText(
    node: TextNode,
    prevRangeEnd: TextCursorLocation = 0,
    start: TextCursorLocation = 0
  ): void {
    let from = prevRangeEnd;
    const { characters, id: nodeId } = node;
    const end = Math.min(start + batchSize, characters.length);

    for (let current: TextCursorLocation = start; current < end; current++) {
      const nextCharacterStyleId = node.getRangeTextStyleId(from, current + 1);
      if (!isMixedStyle(nextCharacterStyleId)) continue;

      const textStyleId = <string>node.getRangeTextStyleId(from, current);
      index[locatorNameFor(nodeId, from, current)] = textStyleId;
      from = current;
      start = current;
    }

    if (start >= characters.length) onFinishIndexing(index);
    else setTimeout(() => indexMixedText(node, from, end));
  }

  async function onFinishIndexing(source: IndexByRangeLocator): Promise<void> {
    if (++processed < total) return;

    const locatorIds = Object.keys(source);
    const converted: IndexByTextStyleId = {};

    locatorIds.forEach((locator) => {
      const value = source[locator];
      converted[value] = converted[value] || [];
      converted[value].push(locator);
    });

    onReady(converted);
  }
}
