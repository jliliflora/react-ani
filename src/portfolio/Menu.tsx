import { useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import styled from "styled-components";

const NavBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  padding: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const Button = styled.button<{ show: boolean }>`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

// const Box = styled.div<{ show: boolean }>`
//   width: 100px;
//   height: 100px;
//   background-color: #ff0000;
//   display: ${(props) => (props.show ? "block" : "none")};
// `;

const Box = styled.div<{ show: boolean }>`
  width: 100px;
  height: 100px;
  background-color: #ff0000;
  position: absolute;
  bottom: 0;
  transform: translateY(${(props) => (props.show ? "0" : "25px")});
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.25s, transform 0.25s;
`;

function MenuBar() {
  const { scrollYProgress } = useScroll();
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > 0.5) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    });
  }, [scrollYProgress]);

  return (
    <NavBar>
      <Button show={showButton}>Click Me</Button>
      <Box show={!showButton} />
    </NavBar>
  );
}

export default MenuBar;
