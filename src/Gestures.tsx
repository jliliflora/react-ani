import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background:linear-gradient(135deg,rgb(142 37 255), rgb(27 15 187));
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
};
//hover, click 같은 이름은 그냥 마음대로 하고 싶은대로 지정해주면됨

function Gestures() {
  return (
    <Wrapper>
      <Box 
      whileHover={{ scale: 1.5, rotateZ: 90}} 
      whileTap={{ scale: 1, borderRadius: "100px"}} 
      />
      <Box variants={boxVariants} whileHover="hover" whileTap="click" />
    </Wrapper>
  );
}
export default Gestures;
