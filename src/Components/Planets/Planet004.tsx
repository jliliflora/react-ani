import { motion } from "framer-motion";
import styled from "styled-components";

// y 값 계산 함수
const largerY = (x: number): number => {
  if (x > -1) {
    // x가 -1보다 클 때만 계산
    const sqrtTerm = Math.sqrt(5625 - (5625 * (x - 230) * (x - 230)) / 52900);

    // 두 개의 y 값 계산
    const y1 = -75 + sqrtTerm; // 첫 번째 y 값
    const y2 = -75 - sqrtTerm; // 두 번째 y 값

    // 각 y 값에 -1을 곱하여 양수로 변환
    const processedY1 = -1 * y1; // y1에 -1 곱하기
    const processedY2 = -1 * y2; // y2에 -1 곱하기

    // 처리된 y 값 중 더 큰 값 구하기
    return Math.max(processedY1, processedY2); // 큰 값 반환
  } else {
    return 0; // x가 -1 이하일 경우 0 반환
  }
};

const smallerY = (x: number): number => {
  if (x > -1) {
    // x가 -1보다 클 때만 계산
    const sqrtTerm = Math.sqrt(5625 - (5625 * (x - 230) * (x - 230)) / 52900);

    // 두 개의 y 값 계산
    const y1 = -75 + sqrtTerm; // 첫 번째 y 값
    const y2 = -75 - sqrtTerm; // 두 번째 y 값

    // 각 y 값에 -1을 곱하여 양수로 변환
    const processedY1 = -1 * y1; // y1에 -1 곱하기
    const processedY2 = -1 * y2; // y2에 -1 곱하기

    // 처리된 y 값 중 더 큰 값 구하기
    return Math.min(processedY1, processedY2); // 작은 값 반환
  } else {
    return 0; // x가 -1 이하일 경우 null 반환
  }
};

const Circle = styled(motion.div)`
  width: 3px;
  height: 3px;
  border-radius: 100%;
  background-color: rgb(130, 130, 130);
  position: absolute;
  left: -1.5px;
  top: -1.5px;
  box-shadow: 0px 0px 3px rgb(255, 255, 255);
`;

function Planet004() {
  return (
    <Circle
      animate={{
        x: [
          230, 300, 350, 400, 446, 460, 446, 400, 350, 300, 230, 160, 110, 60,
          14, 0, 14, 60, 110, 160, 230,
        ],
        y: [
          smallerY(230),
          smallerY(300),
          smallerY(350),
          smallerY(400),
          smallerY(446),
          largerY(460),
          largerY(446),
          largerY(400),
          largerY(350),
          largerY(300),
          largerY(230),
          largerY(160),
          largerY(110),
          largerY(60),
          largerY(14),
          largerY(0),
          smallerY(14),
          smallerY(60),
          smallerY(110),
          smallerY(160),
          smallerY(230),
        ],
      }}
      transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
    />
  );
}

export default Planet004;
