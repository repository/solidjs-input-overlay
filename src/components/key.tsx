import { createEffect, createSignal, ParentComponent, Switch, Match } from "solid-js";
import { useInputState } from "../App";
import { OneOf } from "../util";

const Key: ParentComponent<
  { width?: number; height?: number } & OneOf<{
    keycode: number;
    click: "left" | "right" | "middle";
    scroll: "up" | "down";
  }>
> = (props) => {
  const inputState = useInputState();
  const [active, setActive] = createSignal(false);

  createEffect(() => {
    if (typeof props.keycode === "number") {
      setActive(inputState.keys[props.keycode] ?? false);
    } else if (typeof props.scroll === "string") {
      setActive(inputState.scroll[props.scroll] > 0);
    } else if (typeof props.click === "string") {
      setActive(inputState.mouse[props.click]);
    }
  });

  return (
    <div class="p-0.5">
      <div
        class={`flex bg-white font-medium text-4xl items-center border-4 rounded-xl border-black justify-center transform transition-all duration-150 ${
          active() ? "scale-95 text-white bg-black" : ""
        }`}
        style={{
          width: `${(props.width ?? 1) * 6}rem`,
          height: `${(props.height ?? 1) * 6}rem`,
        }}
      >
        <Switch fallback={props.children}>
          <Match when={typeof props.scroll === "string" && active()}>{inputState.scroll[props.scroll]}</Match>
        </Switch>
      </div>
    </div>
  );
};

export default Key;
