import { Quote } from "./types/quote";
import { FigmaType } from "./types/figma";
import { findTextNodes } from "./utils/core";

type Dependencies = {
  framework: FigmaType;
};

export function navigateToQuote(
  { original: text }: Quote,
  { framework }: Dependencies = { framework: figma }
): void {
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
  const approximateScrollTop =
    Math.round(approximateArealPosition / width) + 100;

  framework.viewport.zoom = 1.2;
  framework.viewport.center = {
    x: x + width / 2,
    y: y + approximateScrollTop,
  };
}
