import * as React from "react";
import * as ReactDOM from "react-dom";

import { MessageKind, Message } from "./types/messaging";
import { isInitial } from "./utils/ui";

import { StateProvider, useAppState } from "./StateProvider";
import { InitialPage } from "./pages/Initial";
import { QuotePage } from "./pages/Quote";

const App: React.FC = () => {
  const { page, setTags, setQuotes } = useAppState();

  React.useEffect(() => {
    window.onmessage = (msg: MessageEvent): void => {
      const { type, data } = msg.data.pluginMessage as Message;

      switch (type) {
        case MessageKind.LOAD_TAG_LIST:
          return setTags(data);

        case MessageKind.SHOW_QUOTES:
          return setQuotes(data);

        case MessageKind.FINISH_INDEXING:
          return alert("Все теги найдены!");

        default:
          throw new Error(`Unknown message kind in UI ${type}.`);
      }
    };

    return () => (window.onmessage = null);
  }, [window.onmessage, setTags, setQuotes]);

  return isInitial(page) ? <InitialPage /> : <QuotePage />;
};

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
