import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.2;
`;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

function App() {
  const textLines = [
    "Hello, I'm SeungYeon",
    "I love coding",
    "Let's build something awesome",
  ]; // 각 줄의 텍스트를 배열로 설정

  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
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
      y: `1em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <TitleWrapper>
      {textLines.map((text, lineIndex) => (
        <Title aria-label={text} role="heading" key={lineIndex}>
          {text.split(" ").map((word, wordIndex) => (
            <Word
              ref={ref}
              aria-hidden="true"
              key={wordIndex}
              initial="hidden"
              animate={ctrls}
              variants={wordAnimation}
              transition={{
                delay: lineIndex * 1, // 줄마다 애니메이션 시작 시간 조정 (lineIndex * 1초)
                delayChildren: wordIndex * 0.125,
                staggerChildren: 0.025,
              }}
            >
              {word.split("").map((character, charIndex) => (
                <Character
                  aria-hidden="true"
                  key={charIndex}
                  variants={characterAnimation}
                >
                  {character}
                </Character>
              ))}
            </Word>
          ))}
        </Title>
      ))}
    </TitleWrapper>
  );
}

export default App;
