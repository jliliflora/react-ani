import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background:linear-gradient(135deg, rgb(94 23 233), rgb(0 40 251));
`;

const BiggerBox = styled(motion.div)`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

// 애니메이트된 스타일 컴포넌트를 사용하는 법!
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.5, rotate: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgb(80, 46, 204)", transition: { duration: 3 } },
};

function Drag() {
  const biggerBoxRef = useRef<HTMLDivElement>(null); //내 코드로 특정 element를 잡을 수 있는 방법
  return (
    <Wrapper>
      <Box drag variants={boxVariants} whileHover="hover" whileTap="click" whileDrag={{ backgroundColor: "rgb(46, 204, 113)"}} />
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileHover="hover"
          whileDrag="drag"
          whileTap="click"
        />
      </BiggerBox>
    </Wrapper>
  );
  // <Box drag="x" /> => x축으로만 움직이게끔 제약이 걸림
  // dragConstraints => 제약이 있는 BOX, 드레깅이 허용될 수 있는 영역
}
export default Drag;
