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
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// 서로 다른 컴포넌트를 layoutId로 연결해서 animate를 보여주는 기능임... 뒤집어져
function SharedLayout() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box >
        {!clicked ? <Circle layoutId="circle" style={{ borderRadius: 50 }} /> : null}
      </Box>
      <Box >
        {clicked ? <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} /> : null}
      </Box>
    </Wrapper>
  );
}
export default SharedLayout;
