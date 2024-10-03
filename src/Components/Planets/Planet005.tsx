import { motion } from "framer-motion";
import styled from "styled-components";

// y 값 계산 함수
const largerY = (x: number): number => {
  if (x > -1) {
    // x가 -1보다 클 때만 계산
    const sqrtTerm = Math.sqrt(
      77 * 77 - (77 * 77 * (x - 250) * (x - 250)) / (250 * 250)
    );

    // 두 개의 y 값 계산
    const y1 = -77 + sqrtTerm; // 첫 번째 y 값
    const y2 = -77 - sqrtTerm; // 두 번째 y 값

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
      77 * 77 - (77 * 77 * (x - 250) * (x - 250)) / (250 * 250)
    );

    // 두 개의 y 값 계산
    const y1 = -77 + sqrtTerm; // 첫 번째 y 값
    const y2 = -77 - sqrtTerm; // 두 번째 y 값

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

function Planet005() {
  return (
    <Circle
      animate={{
        x: [
          500, 487, 460, 415, 350, 300, 250, 200, 150, 90, 40, 13, 0, 13, 40,
          90, 150, 200, 250, 300, 350, 410, 460, 487, 500,
        ],
        y: [
          largerY(500),
          largerY(487),
          largerY(460),
          largerY(415),
          largerY(350),
          largerY(300),
          largerY(250),
          largerY(200),
          largerY(150),
          largerY(90),
          largerY(40),
          largerY(13),
          largerY(0),
          smallerY(13),
          smallerY(40),
          smallerY(90),
          smallerY(150),
          smallerY(200),
          smallerY(250),
          smallerY(300),
          smallerY(350),
          smallerY(410),
          smallerY(460),
          smallerY(487),

          largerY(500),
        ],
      }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    />
  );
}

export default Planet005;
