import React from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

// 애니메이트된 스타일 컴포넌트를 사용하는 법!
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [showing, setShowing] = useState(false);
  return (
    <Wrapper>
      <button>Click</button>
      {showing ? <Box /> : null}
    </Wrapper>
  );
}
export default App;
