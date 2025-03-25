import "./scss/scrollProgress.css";

import Screen from "../Components/Screen";
import { ScrollTriggerProvider } from "../Components/ScrollTriggerProvider";

const SHOW_MARKERS = false;

function ScrollTest() {
  return (
    <div className="App">
      <ScrollTriggerProvider debug={SHOW_MARKERS}>
        <Screen
          title="⏬ Start scrolling ⏬"
          colorStart="#333399"
          colorEnd="#663399"
          fadeIn={false}
        />
      </ScrollTriggerProvider>
      <ScrollTriggerProvider debug={SHOW_MARKERS} options={{ end: "+=300%" }}>
        <Screen
          title="This one takes a bit longer ⏳"
          colorStart="#663399"
          colorEnd="#333399"
          showProgress
        />
      </ScrollTriggerProvider>
      <ScrollTriggerProvider debug={SHOW_MARKERS}>
        <Screen
          title="Scroll based animations 🤯"
          colorStart="#333399"
          colorEnd="#663399"
          fadeOut={false}
          secProgress
        />
      </ScrollTriggerProvider>
      <ScrollTriggerProvider debug={SHOW_MARKERS}>
        <Screen
          title="Scroll based animations 🤯"
          colorStart="#333399"
          colorEnd="#663399"
          fadeOut={false}
          sec2Progress
        />
      </ScrollTriggerProvider>
    </div>
  );
}
export default ScrollTest;
/*
export default function App() {
  return (
    <div className="App">
      <ScrollTriggerProvider debug={SHOW_MARKERS}>
        <Screen
          title="⏬ Start scrolling ⏬"
          colorStart="#333399"
          colorEnd="#663399"
          fadeIn={false}
        />
      </ScrollTriggerProvider>
      <ScrollTriggerProvider debug={SHOW_MARKERS} options={{ end: "+=300%" }}>
        <Screen
          title="This one takes a bit longer ⏳"
          colorStart="#663399"
          colorEnd="#333399"
          showProgress
        />
      </ScrollTriggerProvider>
      <ScrollTriggerProvider debug={SHOW_MARKERS}>
        <Screen
          title="Scroll based animations 🤯"
          colorStart="#333399"
          colorEnd="#663399"
          fadeOut={false}
        />
      </ScrollTriggerProvider>
    </div>
  );
}
*/
