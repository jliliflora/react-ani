import { motion } from "framer-motion";
import styled from "styled-components";

// y 값 계산 함수
const largerY = (x: number): number => {
  if (x > -1) {
    // x가 -1보다 클 때만 계산
    const sqrtTerm = Math.sqrt(
      23 * 23 - (23 * 23 * (x - 73) * (x - 73)) / (73 * 73)
    );

    // 두 개의 y 값 계산
    const y1 = -23 + sqrtTerm; // 첫 번째 y 값
    const y2 = -23 - sqrtTerm; // 두 번째 y 값

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
      23 * 23 - (23 * 23 * (x - 73) * (x - 73)) / (73 * 73)
    );

    // 두 개의 y 값 계산
    const y1 = -23 + sqrtTerm; // 첫 번째 y 값
    const y2 = -23 - sqrtTerm; // 두 번째 y 값

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

function Planet001() {
  return (
    <Circle
      animate={{
        x: [
          146, 136, 114, 93, 73, 53, 32, 10, 0, 10, 32, 53, 73, 93, 114, 136,
          146,
        ],
        y: [
          largerY(146),
          largerY(136),
          largerY(114),
          largerY(93),
          largerY(73),
          largerY(53),
          largerY(32),
          largerY(10),
          largerY(0),
          smallerY(10),
          smallerY(32),
          smallerY(53),
          smallerY(73),
          smallerY(93),
          smallerY(114),
          smallerY(136),
          largerY(146),
        ],
      }}
      transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
    />
  );
}

export default Planet001;
