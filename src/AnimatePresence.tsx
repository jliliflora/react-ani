import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 애니메이트된 스타일 컴포넌트를 사용하는 법!
const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50
  }
}

function AnimatePre() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
      <AnimatePresence>{showing ? (
        <Box 
          variants={boxVariants} 
          initial="initial" 
          animate="visible" 
          exit="leaving" 
        />
        ) : null}</AnimatePresence>
    </Wrapper>
  );
}
export default AnimatePre;
