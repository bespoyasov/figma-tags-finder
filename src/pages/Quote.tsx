import * as React from "react";

import { Quote } from "../types/quote";
import { Screen } from "../types/screen";
import { MessageKind } from "../types/messaging";

import { useAppState } from "../StateProvider";
import {
  sendMessage,
  withPreventDefault,
  lazy,
  sortByGroupName,
} from "../utils/ui";

export const QuotePage: React.FC = () => {
  const { current, quotes, nearest, setPage, setNearest } = useAppState();

  const showStartPage = React.useCallback(
    withPreventDefault(lazy(setPage, Screen.START)),
    [setPage]
  );

  const updateQuoteRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setNearest(value);
    sendMessage(MessageKind.SHOW_QUOTES, {
      current: current.id,
      nearest: value,
    });
  };

  const navigateToQuote = (quote: Quote) => {
    sendMessage(MessageKind.NAVIGATE_TO_QUOTE, quote);
  };

  return (
    <>
      <header>
        <button type="button" onClick={showStartPage}>
          Вернуться в список
        </button>{" "}
        <div>
          Учесть{" "}
          <label>
            <input
              type="number"
              min="0"
              max="200"
              step="10"
              value={nearest}
              onChange={updateQuoteRange}
            />{" "}
            символов вокруг цитаты.
          </label>
        </div>
      </header>
      <main>
        <b>{current.name}</b>

        {quotes.sort(sortByGroupName).map((quote, index, array) => {
          const prev = array[index - 1];
          const groupChanged = !prev || prev.group !== quote.group;

          const { original, extended: withNearestCharacters } = quote;
          const showNearest = withNearestCharacters !== original;
          const shownText = withNearestCharacters || original;
          const selectedStart = shownText.indexOf(original);
          const selectedEnd = shownText.lastIndexOf(original);

          const before = shownText.slice(0, selectedStart);
          const after = shownText.slice(selectedEnd + original.length);

          return (
            <p
              key={original}
              className="quote"
              onClick={lazy(navigateToQuote, quote)}
            >
              {groupChanged && <span className="group">{quote.group}</span>}
              {showNearest ? (
                <>
                  {before}
                  <span className="selection">{original}</span>
                  {after}
                </>
              ) : (
                original
              )}
            </p>
          );
        })}
      </main>
    </>
  );
};
