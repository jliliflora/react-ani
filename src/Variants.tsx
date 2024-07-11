import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background:linear-gradient(135deg,#d0e,rgb(114 0 238));
`;

// 애니메이트된 스타일 컴포넌트를 사용하는 법!
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid; //원 정렬하는 방법
  grid-template-columns: repeat(2, 1fr); //원 정렬하는 방법
  background-color: rgba(225, 225, 225, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
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
      duration: 0.5,
      bounce: 0.5,
      //delayChildren, staggerChildren => 자식컴포넌트에 하나씩 부여하지않고 부모컴포넌트에서 한번에 컨트롤 되는 유틸리티
      delayChildren: 0.5, 
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 50,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

// 부모 컴포넌트가 자식 컴포넌트의 animation을 제어할 수 있고 관련된 시간을 계산하지 않아도 됨
// start, end 같이 동일한 이름을 가져야 인식함

function Variants() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}
// <Box transition={{ duration: 3 }} animate={{ borderRadius: "100px" }} />
export default Variants;
