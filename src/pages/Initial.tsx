import * as React from "react";

import { Tag } from "../types/tag";
import { Screen } from "../types/screen";
import { MessageKind } from "../types/messaging";
import { useAppState } from "../StateProvider";

import {
  sendMessage,
  parseCategory,
  sortByCategoryAndCount,
  lazy,
} from "../utils/ui";

export const InitialPage: React.FC = () => {
  const { nearest, tags, setPage, setCurrent } = useAppState();

  const showQuotesFor = (tag: Tag) => {
    setPage(Screen.QUOTES);
    setCurrent(tag);
    sendMessage(MessageKind.SHOW_QUOTES, { current: tag.id, nearest });
  };

  const indexText = React.useCallback(
    lazy(sendMessage, MessageKind.START_INDEXING),
    [sendMessage]
  );

  return (
    <>
      <header>
        <button type="button" onClick={indexText}>
          Index Text
        </button>
      </header>

      <main>
        <ul>
          {tags.sort(sortByCategoryAndCount).map((tag, index, array) => {
            const prev = array[index - 1];
            const categoryChanged =
              !prev || parseCategory(prev.name) !== parseCategory(tag.name);

            return (
              <React.Fragment key={tag.id}>
                {categoryChanged && (
                  <li className="header">
                    <b>{parseCategory(tag.name)}</b>
                  </li>
                )}

                <li>
                  <button
                    type="button"
                    className="reset"
                    onClick={lazy(showQuotesFor, tag)}
                  >
                    <span className="styleName">{tag.name} </span>
                    <span className="secondary">({tag.count})</span>
                  </button>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </main>
    </>
  );
};
