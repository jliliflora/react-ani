import { MotionValue, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clamp from "lodash/clamp";
import React, { ReactNode, useContext, useLayoutEffect, useRef } from "react";

/*
const ScrollTriggerContext = React.createContext<MotionValue>(null);
const useScrollTrigger = () => useContext(ScrollTriggerContext);
*/

// MotionValue 타입의 null을 허용하는 context
const ScrollTriggerContext = React.createContext<MotionValue<number> | null>(
  null
);

const useScrollTrigger = () => {
  const context = useContext(ScrollTriggerContext);
  if (context === null) {
    throw new Error(
      "useScrollTrigger must be used within a ScrollTriggerProvider"
    );
  }
  return context;
};

const DEFAULT_OPTIONS = {
  end: "+=100%",
  pin: true,
  scrub: true,
  start: "top top",
};

export interface ScrollTriggerProviderProps {
  children: ReactNode; // children 속성을 추가
  debug?: boolean;
  options?: Omit<
    gsap.plugins.ScrollTriggerInstanceVars,
    "markers" | "trigger" | "onUpdate"
  >;
}

const ScrollTriggerProvider: React.FC<ScrollTriggerProviderProps> = ({
  children,
  debug = false,
  options = {},
}) => {
  const refScrollTrigger = useRef<HTMLDivElement>(null);
  const refTimeline = useRef<gsap.core.Timeline>();

  // useMotionValue 훅을 컴포넌트 내부에서 호출
  const progress = useMotionValue(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (refScrollTrigger.current) {
      refTimeline.current = gsap.timeline({
        scrollTrigger: {
          ...DEFAULT_OPTIONS,
          ...options,
          markers: debug,
          trigger: refScrollTrigger.current,
          onUpdate: (instance) => {
            progress.set(clamp(instance.progress, 0, 1));
          },
        },
      });
    }

    return () => {
      // Kill and clear the timeline and scrolltrigger instance when updated/unmounted.
      refTimeline.current?.scrollTrigger?.kill();
      refTimeline.current?.kill();
      refTimeline.current?.clear();
    };
  }, [debug, options, progress]);

  return (
    <div ref={refScrollTrigger}>
      <ScrollTriggerContext.Provider value={progress}>
        {children}
      </ScrollTriggerContext.Provider>
    </div>
  );
};

export { ScrollTriggerProvider, useScrollTrigger };
