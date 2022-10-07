import createWebsocket from "@solid-primitives/websocket";
import { debounce } from "lodash";
import { Component, createContext, onCleanup, onMount, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import Layout from "./components/layout";
import {
  isIOEvent,
  isKeyPressedEvent,
  isKeyReleasedEvent,
  isMouseMovedEvent,
  isMousePressedEvent,
  isMouseReleasedEvent,
  isMouseWheelEvent,
} from "./events";

export interface InputStateData {
  keys: Record<number, boolean>;
  mouse: {
    left: boolean;
    right: boolean;
    middle: boolean;
  };
  scroll: {
    up: number;
    down: number;
  };
}

export const InputStateContext = createContext<InputStateData>();
export const useInputState = () => useContext(InputStateContext);

const App: Component = () => {
  const [inputState, setInputState] = createStore<InputStateData>({
    keys: {},
    mouse: { left: false, right: false, middle: false },
    scroll: { up: 0, down: 0 },
  });

  const resetScrollUp = debounce(() => setInputState("scroll", { up: 0 }), 80);
  const resetScrollDown = debounce(() => setInputState("scroll", { down: 0 }), 80);

  const [connect, disconnect] = createWebsocket(
    "ws://localhost:16899",
    ({ data }) => {
      const event = JSON.parse(data);

      if (!isIOEvent(event)) return;

      if (isKeyPressedEvent(event)) {
        return setInputState("keys", { [event.rawcode]: true });
      }

      if (isKeyReleasedEvent(event)) {
        return setInputState("keys", { [event.rawcode]: false });
      }

      if (isMouseWheelEvent(event)) {
        if (event.rotation === -1) {
          resetScrollUp();
          return setInputState("scroll", { up: inputState.scroll.up + 1 });
        } else if (event.rotation === 1) {
          resetScrollDown();
          return setInputState("scroll", { down: inputState.scroll.down + 1 });
        }
        return;
      }

      if (isMousePressedEvent(event)) {
        if (event.button === 1) {
          return setInputState("mouse", { left: true });
        } else if (event.button === 2) {
          return setInputState("mouse", { right: true });
        } else if (event.button === 3) {
          return setInputState("mouse", { middle: true });
        }
        return;
      }

      if (isMouseReleasedEvent(event)) {
        if (event.button === 1) {
          return setInputState("mouse", { left: false });
        } else if (event.button === 2) {
          return setInputState("mouse", { right: false });
        } else if (event.button === 3) {
          return setInputState("mouse", { middle: false });
        }
        return;
      }

      if (isMouseMovedEvent(event)) return;
    },
    (msg) => console.error(msg),
  );

  onMount(() => {
    connect();
  });

  onCleanup(() => {
    disconnect();
  });

  return (
    <InputStateContext.Provider value={inputState}>
      <Layout />
    </InputStateContext.Provider>
  );
};

export default App;
