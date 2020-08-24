import { TextStyleId, TextStyleName } from "./figma";

export type FoundInSummaries<TSummariesCount = number> = number;
export type Tag = {
  id: TextStyleId;
  name: TextStyleName;
  count: FoundInSummaries;
};
