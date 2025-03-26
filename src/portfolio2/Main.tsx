import { motion } from "framer-motion";
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7e3e3;
  border-radius: 20px;
  gap: 10px;
  height: 40px;
`;
const MenuLi = styled.li`
  font-size: 15px;
  background-color: #fff;
  border-radius: 15px;
  padding: 5px 15px;
  margin: 0px 5px;
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

function Main() {
  return (
    <Wrapper>
      <Header>
        <Item>SeungKive</Item>
        <MenuWrapper>
          <MenuLi>All</MenuLi>
          <MenuLi>About</MenuLi>
          <MenuLi>Projects</MenuLi>
          <MenuLi>Script</MenuLi>
        </MenuWrapper>
        <Item>Contact</Item>
      </Header>
      <MainGrid>main</MainGrid>
    </Wrapper>
  );
}
export default Main;
