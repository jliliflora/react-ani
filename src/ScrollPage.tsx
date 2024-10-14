import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Main = styled.div`
  position: relative;
  height: 300vh;
`;
const Sec001 = styled(motion.div)`
  position: sticky;
  top: 0px;
  height: 100vh;
  background-color: rgb(212, 189, 17);
  font-size: 3.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding-bottom: 10vh;
`;
const Sec002 = styled(motion.div)`
  position: sticky;
  top: 0px;
  height: 100vh;
  background-color: rgb(64, 194, 41);
  font-size: 3.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding-bottom: 10vh;
`;
const Sec003 = styled(motion.div)`
  position: sticky;
  top: 0px;
  height: 100vh;
  background-color: rgb(41, 77, 194);
  font-size: 3.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding-bottom: 10vh;
`;

interface SectionProps {
  scrollYProgress: MotionValue<number>; // scrollYProgress의 타입을 정의
}

const Section1 = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <Sec001>
      <motion.p style={{ scale }}>Scroll Perspective</motion.p>
    </Sec001>
  );
};
const Section2 = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <Sec002>
      <motion.p style={{ scale }}>Scroll Perspective</motion.p>
    </Sec002>
  );
};
const Section3 = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <Sec003>
      <motion.p style={{ scale }}>Scroll Perspective</motion.p>
    </Sec003>
  );
};

function ScrollPage() {
  const container = useRef<HTMLDivElement>(null); // HTMLDivElement 타입으로 설정
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Main ref={container}>
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
      <Section3 scrollYProgress={scrollYProgress} />
    </Main>
  );
}

export default ScrollPage;
