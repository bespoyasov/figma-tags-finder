import { TextStyleName } from "../../types/figma";

export function parseCategory(name: TextStyleName): string {
  const [category] = name.split("/");
  return category.trim();
}
