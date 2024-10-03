import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";
import { start } from "repl";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  // position: relative;
`;

const OrbitContainer = styled(motion.div)`
  width: 600px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* border: 1px solid black; */
`;

const Orbit = styled(motion.div)`
  border: 0.3px solid rgb(130, 130, 130);
  border-radius: 100%;
  position: absolute;
`;

const conVariants = {
  start: { opacity: 1 },
  end: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delayChildren: 0.4,
      staggerChildren: 0.22,
    },
  },
};

const orbitVariants = {
  start: {
    opacity: 0,
    y: 25,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // opacity와 y가 동시에 실행되도록 같은 duration을 설정
    },
  },
};
const lastOrbitVariants = {
  start: {
    opacity: 0,
    y: 50,
    rotate: 0,
  },
  end: {
    opacity: 1,
    y: 0,
    rotate: -19,
    transition: {
      duration: 1, // opacity와 y가 동시에 실행되도록 같은 duration을 설정
    },
  },
};

function App() {
  return (
    <Wrapper>
      <OrbitContainer variants={conVariants} initial="start" animate="end">
        <Orbit
          variants={orbitVariants}
          style={{ width: "32px", height: "13px" }}
        ></Orbit>
        <Orbit
          variants={orbitVariants}
          style={{ width: "50px", height: "18px" }}
        ></Orbit>
        <Orbit
          variants={orbitVariants}
          style={{ width: "63px", height: "23px" }}
        ></Orbit>
        <Orbit
          variants={orbitVariants}
          style={{ width: "77px", height: "27px" }}
        ></Orbit>
        <Orbit
          variants={orbitVariants}
          style={{
            width: "110px",
            height: "35px",
            border: " 0.5px dashed rgb(103, 101, 101)",
          }}
        ></Orbit>
        <Orbit
          variants={orbitVariants}
          style={{ width: "145px", height: "45px" }}
        ></Orbit>
        <Orbit
          variants={orbitVariants}
          style={{ width: "245px", height: "80px" }}
        ></Orbit>
        <Orbit
          variants={orbitVariants}
          style={{ width: "350px", height: "115px" }}
        ></Orbit>
        <Orbit
          variants={orbitVariants}
          style={{ width: "460px", height: "150px" }}
        >
          <motion.div
            style={{
              width: 10,
              height: 10,
              borderRadius: 100,
              backgroundColor: "rgb(103, 101, 101)",
              position: "absolute",
              left: -10,
              top: -10,
            }}
            animate={{
              x: [
                200, 250, 300, 370, 400, 370, 300, 250, 200, 150, 100, 30, 0,
                30, 100, 150, 200,
              ],
              y: [
                0, 10, 20, 50, 100, 150, 180, 190, 200, 190, 180, 150, 100, 50,
                20, 10, 0,
              ],
              // rotate: -360,
            }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />
        </Orbit>
        <Orbit
          variants={lastOrbitVariants}
          style={{
            width: "500px",
            height: "155px",
            border: " 0.5px dashed rgb(103, 101, 101)",
          }}
        ></Orbit>
      </OrbitContainer>
    </Wrapper>
  );
}
export default App;
