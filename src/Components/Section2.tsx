import { motion, MotionValue, useTransform } from "framer-motion";
import styled from "styled-components";

const Sec = styled(motion.div)`
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
interface SectionProps {
  scrollYProgress: MotionValue<number>; // scrollYProgress의 타입을 정의
}

function Section1({ scrollYProgress }: SectionProps) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <Sec>
      <motion.p style={{ scale }}>Scroll Perspective</motion.p>
    </Sec>
  );
}

export default Section1;
