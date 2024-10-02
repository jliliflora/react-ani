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

function App() {
  return <Wrapper>test</Wrapper>;
}
export default App;
