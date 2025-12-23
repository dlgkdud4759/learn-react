import CounterContext from "@/contexts/CounterContext";
import { useContext, useEffect } from "react";

function Left3({ showCounter = true }) {
  useEffect(() => {
    console.log("#### Left3 렌더링.");
  });

  // 4. 자식 컴포넌트에서 Context 사용
  // 4-1. useContext 훅 사용
  const counter = useContext(CounterContext);
  return (
    <div>
      <h3>Left3</h3>
      {/* 조건부로 참조하지만 Context 값이 변경되면 항상 리렌더링 발생(showCounter와 무관)  */}
      <span>{showCounter && counter?.count}</span>
    </div>
  );
}

export default Left3;
