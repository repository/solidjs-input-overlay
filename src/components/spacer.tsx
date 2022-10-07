import { ParentComponent } from "solid-js";

const Spacer: ParentComponent<{ width?: number; height?: number }> = (props) => {
  return (
    <div class="p-0.5">
      <div
        style={{
          width: `${(props.width ?? 1) * 6}rem`,
          height: `${(props.height ?? 1) * 6}rem`,
        }}
      />
    </div>
  );
};

export default Spacer;
