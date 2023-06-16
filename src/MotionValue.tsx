import React from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

// 애니메이트된 스타일 컴포넌트를 사용하는 법!
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function MotionValue() {
  const x = useMotionValue(0); // 좌표가 필요할때
  const potato = useTransform(x, [-800, 0, 800], [2, 1, 0.1]); // 800 -> 2 값으로 전달 받고싶을때
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 202, 238), rgb(0, 56, 238))",
      "linear-gradient(135deg, rgb(238, 202, 0), rgb(0, 238, 32))",
    ]
  );
  return (
    <Wrapper style={{ background: gradient }}>
      <button onClick={() => x.set(200)}>clickme</button>
      <Box style={{ x, rotateZ }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
  // dragSnampToOrigin : 원점으로 알아서 돌아오는 기능
  // <Box style={{ x, scale: potato }}
}
export default MotionValue;
