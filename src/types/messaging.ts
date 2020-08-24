export enum MessageKind {
  START_INDEXING = "START_INDEXING",
  FINISH_INDEXING = "FINISH_INDEXING",
  UPDATE_RANGE = "UPDATE_RANGE",
  SHOW_QUOTES = "SHOW_QUOTES",
  LOAD_TAG_LIST = "LOAD_TAG_LIST",
  NAVIGATE_TO_QUOTE = "NAVIGATE_TO_QUOTE",
}

export type MessagePayload = any;
export type Message<TPayload extends MessagePayload = MessagePayload> = {
  type: MessageKind;
  data: TPayload;
};
