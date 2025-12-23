import CounterContext from "@/contexts/CounterContext";
import { useContext, useEffect } from "react";

function Right3() {
  useEffect(() => {
    console.log("#### Right3 렌더링.");
  });

  // 4. 자식 컴포넌트에서 Context 사용
  // 4-1. useContext 훅 사용
  const counter = useContext(CounterContext);
  return (
    <div>
      <h3>Right3</h3>
      <button onClick={() => counter?.countUp(1)}>+1</button>
      <button onClick={() => counter?.reset(0)}>0</button>
      <button onClick={() => counter?.countDown(1)}>-1</button>
    </div>
  );
}

export default Right3;
