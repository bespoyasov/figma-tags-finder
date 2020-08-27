import { MessageKind, MessagePayload, Message } from "../../types/messaging";

export function sendMessage(type: MessageKind, data?: MessagePayload): void {
  const pluginMessage: Message = { type, data };
  parent.postMessage({ pluginMessage }, "*");
}
