import { Message, MessageKind } from "./types/messaging";
import { TextStyleId } from "./types/figma";
import { Quote } from "./types/quote";
import { Tag } from "./types/tag";
import {
  IndexByTextStyleId,
  CharactersCount,
  CompoundRangeLocator,
} from "./types/indexing";

import { sendMessage, parseLocatorName } from "./utils/core";
import { indexText as indexTextAndThen } from "./indexText";
import { textLocatorToQuote } from "./textLocatorToQuote";
import { navigateToQuote } from "./navigateToQuote";

const STORAGE_KEY = "tags-finder-index";

figma.showUI(__html__);
figma.ui.resize(540, 400);
refreshUI();

figma.ui.onmessage = ({ type, data }: Message) => {
  switch (type) {
    case MessageKind.START_INDEXING:
      return indexTextAndThen(saveIndexAndRefreshUI);

    case MessageKind.SHOW_QUOTES:
      return showQuotes(data.current, data.nearest);

    case MessageKind.NAVIGATE_TO_QUOTE:
      return navigateToQuote(data);

    default:
      throw new Error(`Unknown message kind ${type} in core.`);
  }
};

async function saveIndexAndRefreshUI(index: IndexByTextStyleId): Promise<void> {
  await figma.clientStorage.setAsync(STORAGE_KEY, index);
  await refreshUI();
  sendMessage(MessageKind.FINISH_INDEXING);
}

async function refreshUI() {
  const index = await figma.clientStorage.getAsync(STORAGE_KEY);
  const styles = figma.getLocalTextStyles();
  const tags: Tag[] = styles.map(({ name, id }: TextStyle) => {
    const totalLocators = index[id] || [];
    const nodesId = totalLocators.map((name) => parseLocatorName(name)[0]);
    const uniqueNodes = Array.from(new Set(nodesId));
    return { id, name, count: uniqueNodes.length };
  });

  sendMessage<Tag[]>(MessageKind.LOAD_TAG_LIST, tags);
}

async function showQuotes(id: TextStyleId, takeNearest: CharactersCount = 0) {
  const index = await figma.clientStorage.getAsync(STORAGE_KEY);
  const locators = index[id];
  const quotes = locators.map(
    (locator: CompoundRangeLocator): Quote =>
      textLocatorToQuote(locator, takeNearest)
  );

  sendMessage<Quote[]>(MessageKind.SHOW_QUOTES, quotes);
}
