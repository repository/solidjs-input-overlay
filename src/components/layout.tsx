import { Component } from "solid-js";
import Key from "./key";
import Spacer from "./spacer";

const Layout: Component = () => {
  return (
    <div class="mt-4 ml-4">
      <div class="flex">
        <div class="flex flex-col">
          <div class="flex">
            <Spacer />
            <Key keycode={49}>1</Key>
            <Key keycode={50}>2</Key>
            <Key keycode={51}>3</Key>
            <Key keycode={52}>4</Key>
            <Key keycode={53}>5</Key>
          </div>
          <div class="flex">
            <Key width={1.5} keycode={9}>
              Tab
            </Key>
            <Key keycode={81}>Q</Key>
            <Key keycode={87}>W</Key>
            <Key keycode={69}>E</Key>
            <Key keycode={82}>R</Key>
          </div>
          <div class="flex">
            <Spacer width={1.75} />
            <Key keycode={65}>A</Key>
            <Key keycode={83}>S</Key>
            <Key keycode={68}>D</Key>
            <Key keycode={70}>F</Key>
          </div>
          <div class="flex">
            <Key width={2.25} keycode={160}>
              Shift
            </Key>
            <Key keycode={90}>Z</Key>
            <Key keycode={88}>X</Key>
            <Key keycode={67}>C</Key>
            <Key keycode={86}>V</Key>
          </div>
          <div class="flex">
            <Key width={1.25} keycode={162}>
              Ctrl
            </Key>
            <Spacer width={1.25} />
            <Key width={1.25} keycode={164}>
              Alt
            </Key>
            <Key width={3.5} keycode={32} />
          </div>
        </div>
        <div class="flex flex-col relative -left-20">
          <div class="flex">
            <Spacer />
          </div>
          <div class="flex">
            <Spacer />
            <Key scroll="up">ScU</Key>
          </div>
          <div class="flex">
            <Key click="left">LMB</Key>
            <Key click="middle">MMB</Key>
            <Key click="right">RMB</Key>
          </div>
          <div class="flex">
            <Spacer />
            <Key scroll="down">ScD</Key>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
