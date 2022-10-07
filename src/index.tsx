/* @refresh reload */
import { render } from "solid-js/web";
import "virtual:windi-devtools";
import "windi.css";
import App from "./App";

render(() => <App />, document.getElementById("root") as HTMLElement);
