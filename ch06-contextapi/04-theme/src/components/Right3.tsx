import CounterContext from "@/contexts/CounterContext";
import { use, useEffect } from "react";

function Right3() {
  useEffect(() => {
    console.log("#### Right3 렌더링.");
  });

  // context 사용하기
  const count = use(CounterContext);
  return (
    <div>
      <h3>Right3</h3>
      <button onClick={() => count?.countUp(1)}>+1</button>
      <button onClick={() => count?.reset(0)}>0</button>
      <button onClick={() => count?.countDown(1)}>-1</button>
    </div>
  );
}

export default Right3;
