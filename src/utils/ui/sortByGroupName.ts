import { Quote } from "../../types/quote";

export function sortByGroupName(a: Quote, b: Quote) {
  return b.group > a.group ? 1 : -1;
}
