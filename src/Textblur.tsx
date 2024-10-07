import { motion } from "framer-motion";

const BlurredComponent = () => {
  return (
    <motion.div
      initial={{ filter: "blur(10px)" }} // 초기 상태: 블러 효과 적용
      animate={{ filter: "blur(0px)" }} // 애니메이션 상태: 블러 효과 제거
      transition={{ duration: 0.5 }} // 애니메이션 지속 시간
      style={{ width: "200px", height: "200px", backgroundColor: "lightblue" }}
    >
      이 텍스트는 블러 애니메이션을 사용합니다.
    </motion.div>
  );
};

export default BlurredComponent;
