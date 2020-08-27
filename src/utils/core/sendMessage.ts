import { MessagePayload, MessageKind, Message } from "../../types/messaging";

export function sendMessage<TPayload extends MessagePayload>(
  type: MessageKind,
  data?: TPayload
): void {
  const message: Message<TPayload> = { type, data };
  figma.ui.postMessage(message);
}
