import { Quote } from "./types/quote";
import { CompoundTextRangeLocator, CharactersCount } from "./types/indexing";
import { parseLocatorName, extractGroupName } from "./utils/core";

export function textLocatorToQuote(
  nodeId: CompoundTextRangeLocator,
  takeNearest: CharactersCount = 0
): Quote {
  const [id, location] = parseLocatorName(nodeId);
  const node = <TextNode>figma.getNodeById(id);
  const group = extractGroupName(node);
  const { characters } = node;

  if (!location) return { original: characters, group };

  const [first, last] = location.split(":").map(Number);
  const start = Math.max(first - takeNearest, 0);
  const end = Math.min(last + takeNearest, node.characters.length);

  return {
    original: characters.slice(first, last),
    extended: characters.slice(start, end),
    group,
  };
}
