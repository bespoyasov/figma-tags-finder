import { GroupName } from "../types/quote";
import { TextStyleId, Mixed, NodeId } from "../types/figma";
import { MessagePayload, MessageKind, Message } from "../types/messaging";
import {
  TextCursorLocation,
  CompoundTextRangeLocator,
  TextCursorRange,
} from "../types/indexing";

export function isTextNode(node: PageNode | SceneNode): node is TextNode {
  return node.type === "TEXT";
}

export function isMixedStyle(id: TextStyleId | Mixed): id is Mixed {
  return id === figma.mixed;
}

export function findTextNodes(): TextNode[] {
  return figma.root.findAll(isTextNode) as TextNode[];
}

export function locatorNameFor(
  nodeId: NodeId,
  start: TextCursorLocation,
  end: TextCursorLocation
): CompoundTextRangeLocator {
  return `${nodeId}/${start}:${end}`;
}

export function parseLocatorName(
  name: CompoundTextRangeLocator
): [NodeId, TextCursorRange] {
  const [nodeId, locationRange] = name.split("/");
  return [nodeId, locationRange];
}

export function sendMessage<TPayload extends MessagePayload>(
  type: MessageKind,
  data?: TPayload
): void {
  const message: Message<TPayload> = { type, data };
  figma.ui.postMessage(message);
}

export function extractGroupName({ characters }: TextNode): GroupName {
  const firstLineBreak = characters.search(/\n/);
  const endPosition = firstLineBreak >= 0 ? firstLineBreak : characters.length;
  return characters.slice(0, endPosition);
}
