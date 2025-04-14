import { useState } from "react";

function Soultion001() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

export default Soultion001;

// onClick={() => setCount(count + 1)} -> 이거 함수 구조 외우자...
