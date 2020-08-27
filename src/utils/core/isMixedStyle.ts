import { TextStyleId, Mixed } from "../../types/figma";

export function isMixedStyle(id: TextStyleId | Mixed): id is Mixed {
  return id === figma.mixed;
}
