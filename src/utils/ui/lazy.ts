import { InvocableFunction } from "../../types/shared";

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
