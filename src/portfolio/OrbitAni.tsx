import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";
import { start } from "repl";
import Planet004 from "../Components/Planets/Planet004";
import Planet003 from "../Components/Planets/Planet003";
import Planet002 from "../Components/Planets/Planet002";
import Planet001 from "../Components/Planets/Planet001";
import Planet005 from "../Components/Planets/Planet005";

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

const Svg = styled.svg`
  width: 60px;
  height: 60px;
  path {
    stroke: rgb(130, 130, 130);
    stroke-width: 0.5;
  }
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
    rotate: -20,
    transition: {
      duration: 1, // opacity와 y가 동시에 실행되도록 같은 duration을 설정
    },
  },
};

function App() {
  return (
    <Wrapper>
      <OrbitContainer variants={conVariants} initial="start" animate="end">
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="81"
          height="81"
          viewBox="0 0 81 81"
          fill="none"
        >
          <motion.path
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            d="M40.932.932v80M60.931 6.29l-40 69.283m54.642-54.641-69.282 40m74.641-20h-80m74.641 20-69.282-40m54.64 54.641-40-69.282"
          />
        </Svg>
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
          style={{ width: "146px", height: "46px" }}
        >
          <Planet001 />
        </Orbit>
        <Orbit
          variants={orbitVariants}
          style={{ width: "244px", height: "80px", rotate: -1 }}
        >
          <Planet002 />
        </Orbit>
        <Orbit
          variants={orbitVariants}
          style={{ width: "350px", height: "116px" }}
        >
          <Planet003 />
        </Orbit>
        <Orbit
          variants={orbitVariants}
          style={{ width: "460px", height: "150px" }}
        >
          <Planet004 />
        </Orbit>
        <Orbit
          variants={lastOrbitVariants}
          style={{
            width: "500px",
            height: "154px",
            border: " 0.5px dashed rgb(103, 101, 101)",
          }}
        >
          <Planet005 />
        </Orbit>
      </OrbitContainer>
    </Wrapper>
  );
}
export default App;
