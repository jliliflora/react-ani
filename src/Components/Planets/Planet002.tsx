import { motion } from "framer-motion";
import styled from "styled-components";

// y 값 계산 함수
const largerY = (x: number): number => {
  if (x > -1) {
    // x가 -1보다 클 때만 계산
    const sqrtTerm = Math.sqrt(
      40 * 40 - (40 * 40 * (x - 122) * (x - 122)) / (122 * 122)
    );

    // 두 개의 y 값 계산
    const y1 = -40 + sqrtTerm; // 첫 번째 y 값
    const y2 = -40 - sqrtTerm; // 두 번째 y 값

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
      40 * 40 - (40 * 40 * (x - 122) * (x - 122)) / (122 * 122)
    );

    // 두 개의 y 값 계산
    const y1 = -40 + sqrtTerm; // 첫 번째 y 값
    const y2 = -40 - sqrtTerm; // 두 번째 y 값

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
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: rgb(130, 130, 130);
  position: absolute;
  left: -2px;
  top: -2px;
  box-shadow: 0px 0px 3px rgb(255, 255, 255);
`;

function Planet002() {
  return (
    <Circle
      animate={{
        x: [
          0, 13, 40, 70, 99, 122, 151, 180, 205, 230, 244, 230, 205, 180, 151,
          122, 99, 70, 40, 13, 0,
        ],
        y: [
          largerY(0),
          smallerY(13),
          smallerY(40),
          smallerY(70),
          smallerY(99),
          smallerY(122),
          smallerY(151),
          smallerY(180),
          smallerY(205),
          smallerY(230),
          largerY(244),
          largerY(230),
          largerY(205),
          largerY(180),
          largerY(151),
          largerY(122),
          largerY(99),
          largerY(70),
          largerY(40),
          largerY(13),
          largerY(0),
        ],
      }}
      transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
    />
  );
}

export default Planet002;
