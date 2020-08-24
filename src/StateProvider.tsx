import * as React from "react";

import { Screen } from "./types/screen";
import { CharactersCount } from "./types/indexing";
import { Quote } from "./types/quote";
import { Tag } from "./types/tag";

type Update<TField> = (value: TField) => void;

export type State = {
  page: Screen;
  tags: Tag[];
  quotes: Quote[];
  current: Tag;
  nearest: CharactersCount;

  setPage: Update<Screen>;
  setTags: Update<Tag[]>;
  setQuotes: Update<Quote[]>;
  setCurrent: Update<Tag>;
  setNearest: Update<CharactersCount>;
};

const StateContext = React.createContext<State>(null);

export const useAppState = () => React.useContext(StateContext);
export const StateProvider: React.FC = ({ children }) => {
  const [page, setPage] = React.useState(Screen.START);
  const [tags, setTags] = React.useState<Tag[]>([]);
  const [quotes, setQuotes] = React.useState<Quote[]>([]);
  const [current, setCurrent] = React.useState<Tag>();
  const [nearest, setNearest] = React.useState<CharactersCount>(0);

  return (
    <StateContext.Provider
      value={{
        page,
        tags,
        quotes,
        current,
        nearest,

        setPage,
        setTags,
        setQuotes,
        setCurrent,
        setNearest,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
