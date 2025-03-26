import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  min-height: 100vh;
  /* height: 100vh; */
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.bgColor};
  overflow: auto;
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  height: 140px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #000000;
`;
const MenuWrapper = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7e3e3;
  border-radius: 20px;
  gap: 5px;
  height: 40px;
  /* padding: 0 2px; */
`;
const MenuLi = styled.li`
  font-size: 15px;
  border-radius: 15px;
  padding: 8px 20px;
  position: relative;
  z-index: 1;
  cursor: pointer;
`;
const MenuBg = styled(motion.div)`
  position: absolute;
  top: 4px;
  height: calc(100% - 8px);
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 0;
`;

const Item = styled.div`
  margin: 0px 80px;
`;

const MainGrid = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 140px;
  min-height: 100vh; /* ✅ 최소 100vh, 더 커질 수 있음 */
  width: 1280px;
  /* margin-bottom: 100px; */
`;

const menus = ["All", "About", "Projects", "Script"];

function Main() {
  const [selected, setSelected] = useState("All");
  const [bgStyle, setBgStyle] = useState({ left: 0, width: 0 });
  const menuRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});

  useLayoutEffect(() => {
    const el = menuRefs.current[selected];
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setBgStyle({
        left: offsetLeft + 5,
        width: offsetWidth - 10,
      });
    }
  }, [selected]);

  return (
    <Wrapper>
      <Header>
        <Item>SeungKive</Item>
        <MenuWrapper>
          <MenuBg
            layoutId="bg"
            style={{ left: bgStyle.left, width: bgStyle.width }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: [0.33, 0, 0.2, 1],
            }}
          />
          {menus.map((menu) => (
            <MenuLi
              key={menu}
              onClick={() => setSelected(menu)}
              ref={(el) => (menuRefs.current[menu] = el)}
            >
              {menu}
            </MenuLi>
          ))}
        </MenuWrapper>

        <Item>Contact</Item>
      </Header>
      <MainGrid>main</MainGrid>
    </Wrapper>
  );
}
export default Main;
