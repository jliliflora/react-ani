import { motion } from "framer-motion";
import styled from "styled-components";

// y 값 계산 함수
const largerY = (x: number): number => {
  if (x > -1) {
    // x가 -1보다 클 때만 계산
    const sqrtTerm = Math.sqrt(
      58 * 58 - (58 * 58 * (x - 175) * (x - 175)) / (175 * 175)
    );

    // 두 개의 y 값 계산
    const y1 = -58 + sqrtTerm; // 첫 번째 y 값
    const y2 = -58 - sqrtTerm; // 두 번째 y 값

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
    const sqrtTerm = Math.sqrt(
      58 * 58 - (58 * 58 * (x - 175) * (x - 175)) / (175 * 175)
    );

    // 두 개의 y 값 계산
    const y1 = -58 + sqrtTerm; // 첫 번째 y 값
    const y2 = -58 - sqrtTerm; // 두 번째 y 값

    // 각 y 값에 -1을 곱하여 양수로 변환
    const processedY1 = -1 * y1; // y1에 -1 곱하기
    const processedY2 = -1 * y2; // y2에 -1 곱하기

    // 처리된 y 값 중 더 큰 값 구하기
    return Math.min(processedY1, processedY2); // 큰 값 반환
  } else {
    return 0; // x가 -1 이하일 경우 0 반환
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

function Planet003() {
  return (
    <Circle
      animate={{
        x: [
          175, 110, 70, 30, 7, 0, 7, 30, 70, 110, 175, 240, 280, 305, 340, 350,
          340, 305, 280, 240, 175,
        ],
        y: [
          largerY(175),
          largerY(110),
          largerY(70),
          largerY(30),
          largerY(7),
          largerY(0),
          smallerY(7),
          smallerY(30),
          smallerY(70),
          smallerY(110),
          smallerY(175),
          smallerY(240),
          smallerY(280),
          smallerY(305),
          smallerY(340),
          largerY(350),
          largerY(340),
          largerY(305),
          largerY(280),
          largerY(240),
          largerY(175),
        ],
      }}
      transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
    />
  );
}

export default Planet003;
