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
  width: 400px;
  height: 200px;
  position: relative;
  border: 1px solid wheat;
  border-radius: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <motion.div
          style={{
            width: 20,
            height: 20,
            borderRadius: 100,
            backgroundColor: "#fd3",
            position: "absolute",
            left: -10,
            top: -10,
          }}
          animate={{
            x: [
              200, 250, 300, 370, 400, 370, 300, 250, 200, 150, 100, 30, 0, 30,
              100, 150, 200,
            ],
            y: [
              0, 10, 20, 50, 100, 150, 180, 190, 200, 190, 180, 150, 100, 50,
              20, 10, 0,
            ],
            // rotate: -360,
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      </Box>
    </Wrapper>
  );
}
export default App;
