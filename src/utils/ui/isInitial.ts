import { Screen } from "../../types/screen";

export function isInitial(page: Screen): boolean {
  return page === Screen.START;
}
