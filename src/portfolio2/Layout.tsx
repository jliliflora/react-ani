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
  background-color: ${(props) => props.theme.bgColor};
  // position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

// 애니메이트된 스타일 컴포넌트를 사용하는 법!
const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// const Overlay = styled(motion.div)`
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5)
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  // background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function TestLayout() {
  // const [clicked, setClicked] = useState(false);
  // const toggle = () => setClicked((prev) => !prev);

  const [id, setId] = useState<null | string>(null);
  console.log(id);
  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box onClick={() => setId(n)} key={n} layoutId={n} />
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box layoutId={id} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
export default TestLayout;
