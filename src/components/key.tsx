import { createEffect, createSignal, ParentComponent } from "solid-js";
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
    if (!inputState) return;
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
        class={`flex bg-key-inactive-bg text-key-inactive-text font-medium text-4xl items-center border-4 rounded-xl border-key-inactive-ring justify-center transform transition-all duration-150 ${
          active() ? "scale-95 !border-key-active-ring !text-key-active-text !bg-key-active-bg" : ""
        }`}
        style={{
          width: `${(props.width ?? 1) * 6}rem`,
          height: `${(props.height ?? 1) * 6}rem`,
        }}
      >
        {typeof props.scroll === "string" && active() && inputState ? inputState.scroll[props.scroll] : props.children}
      </div>
    </div>
  );
};

export default Key;
