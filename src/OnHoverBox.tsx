import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  margin-top: 50px;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const FlexItem = styled.div``;
const MenuItem = styled(motion.div)`
  width: 200px;
  perspective: 2000px;
  background-color: aqua;
`;
const SubMenu = styled(motion.div)`
  position: absolute;
  top: 30px;
  padding: 15px;
  background-color: #ccc;
  border-radius: 6px;
  transform-origin: 50% -30px;
`;
const SubMenuBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: 0 0;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;
const SubMenuContainer = styled.div``;
const SubMenuItem = styled.div`
  margin-bottom: 5px;
`;

const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

export default function OnHoverBox() {
  const [isHover, toggleHover] = React.useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const [isClicked, setIsClicked] = React.useState(false);

  const toggleClickMenu = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Wrapper>
      <Container>
        <FlexItem>
          {/* <MenuItem onHoverStart={toggleHoverMenu} onHoverEnd={toggleHoverMenu}> */}
          <MenuItem onClick={toggleClickMenu}>
            <li
              style={{
                background: "transparent",
                border: "none",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              Menu Item
            </li>
            <SubMenu
              initial="exit"
              animate={isClicked ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              <SubMenuBackground />
              <SubMenuContainer>
                <SubMenuItem>Submenu Item 1</SubMenuItem>
                <SubMenuItem>Submenu Item 2</SubMenuItem>
                <SubMenuItem>Submenu Item 3</SubMenuItem>
                <SubMenuItem>Submenu Item 4</SubMenuItem>
                <SubMenuItem>Submenu Item 5</SubMenuItem>
              </SubMenuContainer>
            </SubMenu>
          </MenuItem>
        </FlexItem>
      </Container>
    </Wrapper>
  );
}
