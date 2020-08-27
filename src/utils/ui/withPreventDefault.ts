import { InvocableFunction } from "../../types/shared";

export function withPreventDefault(fn: InvocableFunction, ...args: any[]) {
  return function (e: React.SyntheticEvent) {
    e.preventDefault();
    fn(...args, e);
  };
}
