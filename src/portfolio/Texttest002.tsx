import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Textblur from "./Textblur";
import styled from "styled-components";

const Word = styled(motion.div)`
  /* display: inline-block; */
  /* margin-right: 0.25em;
  padding: 1em; */
  /* white-space: nowrap; */
  font-size: 3em;
`;

const Character = styled(motion.span)`
  /* display: inline-block; */
  /* margin-right: 0em; */
`;

function Texttest002() {
  const texts = [
    "This is the first line.",
    "Here comes the second line.",
    "The third line is right here.",
    "Finally, the fourth line.",
  ]; // 텍스트 배열

  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: 3,
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: [0.2, 0.325, 0.15, 0.45],
      },
    },
  };

  return (
    <>
      <Textblur />
      <div>
        {texts.map((text, lineIndex) => (
          <Word
            ref={ref}
            key={lineIndex}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              duration: 0.3,
              delayChildren: lineIndex * 0.25, // 줄 별로 딜레이를 줘서 순차적으로 나타나게 함
              staggerChildren: 0.02,
            }}
          >
            {text.split("").map((character, charIndex) => (
              <Character
                key={charIndex}
                variants={characterAnimation}
                aria-hidden="true"
              >
                {character}
              </Character>
            ))}
          </Word>
        ))}
      </div>
    </>
  );
}

export default Texttest002;
