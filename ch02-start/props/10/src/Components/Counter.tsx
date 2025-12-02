import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  // 카운터 감소
  const countDown = () => {
    setCount(count - 1);
  };

  // 카운터 초기화
  const countReset = () => {
    setCount(0);
  };

  // 카운터 증가
  const countUp = () => {
    setCount(count + 1);
  };

  return (
    <div id="counter">
      <button type="button" onClick={countDown}>
        -_-
      </button>
      <button type="button" onClick={countReset}>
        0_0
      </button>
      <button type="button" onClick={countUp}>
        +_+
      </button>
      <span>{count}</span>
    </div>
  );
}
