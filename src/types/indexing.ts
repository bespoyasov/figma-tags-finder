import { TextStyleId } from "./figma";

export type TextCursorLocation = number;
export type TextCursorRange = string;
export type RangeRightBoundary = TextCursorLocation;
export type CharactersCount = number;
export type CompoundRangeLocator = string;

export type IndexBatchSize = number;
export type IndexReadyCallback = (index: IndexByTextStyleId) => Promise<void>;
export type IndexByRangeLocator = Record<CompoundRangeLocator, TextStyleId>;
export type IndexByTextStyleId = Record<TextStyleId, CompoundRangeLocator[]>;
