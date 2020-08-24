import * as React from "react";
import { Tag } from "../types/tag";
import { Screen } from "../types/screen";
import { TextStyleName } from "../types/figma";
import { Message, MessageKind, MessagePayload } from "../types/messaging";
import { Quote } from "../types/quote";

export function isInitial(page: Screen): boolean {
  return page === Screen.START;
}

export function sendMessage(type: MessageKind, data?: MessagePayload): void {
  const pluginMessage: Message = { type, data };
  parent.postMessage({ pluginMessage }, "*");
}

export function parseCategory(name: TextStyleName): string {
  const [category] = name.split("/");
  return category.trim();
}

export function sortByCategoryAndCount(a: Tag, b: Tag) {
  const aName = parseCategory(a.name);
  const bName = parseCategory(b.name);

  if (aName < bName) return -1;
  if (aName > bName) return 1;

  return b.count - a.count;
}

export function sortByGroupName(a: Quote, b: Quote) {
  return b.group > a.group ? 1 : -1;
}

type InvocableFunction<T = any> = (...args: any[]) => T;

export function withPreventDefault(fn: InvocableFunction, ...args: any[]) {
  return function (e: React.SyntheticEvent) {
    e.preventDefault();
    fn(...args, e);
  };
}

type Signal<TReturn = any> = InvocableFunction<TReturn>;
type Arguments = unknown[];
type Deferred<TReturn> = () => TReturn;

export function lazy<TReturn = void>(
  fn: Signal<TReturn>,
  ...args: Arguments
): Deferred<TReturn> {
  return function deferCall(): TReturn {
    return fn(...args);
  };
}
