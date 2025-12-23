import CounterContext from "@/contexts/CounterContext";
import { use, useEffect } from "react";

function Left3({ showcounter = true }) {
  useEffect(() => {
    console.log("#### Left3 렌더링.");
  });

  let counter = null;

  // context 사용하기
  // use를 이용하면 조건부로 컨텍스트 구독이 가능하므로 불필요한 리렌더링 방지
  if (showcounter) {
    counter = use(CounterContext);
  }
  return (
    <div>
      <h3>Left3</h3>
      <span>{counter?.count}</span>
    </div>
  );
}

export default Left3;
