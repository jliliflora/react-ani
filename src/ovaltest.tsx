import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  // position: relative;
`;

// 애니메이트된 스타일 컴포넌트를 사용하는 법!
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  //display: grid; //원 정렬하는 방법
  //grid-template-columns: repeat(2, 1fr); //원 정렬하는 방법
  background-color: rgba(225, 225, 225, 0.2);
  //border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

  /* display: block;
  overflow: hidden;
  position: absolute; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  // border-radius: 0px 0px 0px 0px;
`;

const Circle = styled(motion.div)`
  position: absolute;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */

  // background-color: white;
  height: 50px;
  width: 70px;
  border-radius: 100%;
  border: 1px solid white;
  // box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

  /* box-sizing: border-box;
width: 260px;
height: 260px;
display: block;
overflow: visible;
position: absolute;
border-radius: 100%;
border: 1px solid rgba(105, 105, 105, 0.2); */
`;

const Circle2 = styled(motion.div)`
  position: absolute;
  height: 60px;
  width: 80px;
  border-radius: 100%;
  border: 1px solid white;
  // box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle3 = styled(motion.div)`
  position: absolute;
  height: 70px;
  width: 90px;
  border-radius: 100%;
  border: 1px solid white;
  // box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle4 = styled(motion.div)`
  position: absolute;
  height: 80px;
  width: 100px;
  border-radius: 100%;
  border: 1px solid white;
  // box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.1,
      //delayChildren, staggerChildren => 자식컴포넌트에 하나씩 부여하지않고 부모컴포넌트에서 한번에 컨트롤 되는 유틸리티
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0.1,
    y: 100,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle2 variants={circleVariants} />
        <Circle3 variants={circleVariants} />
        <Circle4 variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}
export default App;
