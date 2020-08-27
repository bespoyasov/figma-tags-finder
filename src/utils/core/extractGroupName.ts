import { GroupName } from "../../types/quote";

export function extractGroupName({ characters }: TextNode): GroupName {
  const firstLineBreak = characters.search(/\n/);
  const endPosition = firstLineBreak >= 0 ? firstLineBreak : characters.length;
  return characters.slice(0, endPosition);
}
