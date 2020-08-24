import { findTextNodes } from "./utils/core";
import { Quote } from "./types/quote";

export function navigateToQuote({ original: text }: Quote): void {
  const textNodes = findTextNodes();
  const target = textNodes.find((node) => node.characters.includes(text));
  if (!target) return;

  const { width, height, characters, absoluteTransform } = target;
  const x = absoluteTransform[0][2];
  const y = absoluteTransform[1][2];

  const occurrenceLocation = characters.indexOf(text);
  const fractionalPosition = occurrenceLocation / characters.length;

  const area = width * height;
  const approximateArealPosition = area * fractionalPosition;
  const approximateScrollTop = approximateArealPosition / width + 100;

  figma.viewport.zoom = 1.5;
  figma.viewport.center = {
    x: x + width / 2,
    y: y + approximateScrollTop,
  };
}
