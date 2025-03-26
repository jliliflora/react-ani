import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  background-color: ${(props) => props.theme.bgColor};
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
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
  border: 1px solid black;
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
