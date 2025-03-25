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
  /* background-color: ${(props) => props.theme.bgColor}; */
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  height: 10vh;
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
  background-color: #cc1010;
  gap: 20px;
  height: 50px;
  width: 300px;
`;
const MenuLi = styled.li`
  font-size: 20px;
  border: 1px solid #111;
`;
function Main() {
  return (
    <Wrapper>
      <Header>
        <div>logo</div>
        <MenuWrapper>
          <MenuLi>ex1</MenuLi>
          <MenuLi>ex2</MenuLi>
          <MenuLi>ex3</MenuLi>
          <MenuLi>ex3</MenuLi>
        </MenuWrapper>
        <div>logo</div>
      </Header>
      <div>main</div>
    </Wrapper>
  );
}
export default Main;
