import styled from "styled-components";
import Menu from "./Menu";

const Wrapper = styled.div`
  height: 200vh;
  width: 100vw;
  background-color: #aaaaaa;

  /* display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative; */
`;

function MenuTest() {
  return (
    <Wrapper>
      wrapper
      <Menu />
    </Wrapper>
  );
}

export default MenuTest;
