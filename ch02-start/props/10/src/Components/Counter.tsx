import { useState } from "react";
import Button from "./button";

export default function Counter() {
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
      <Button onClick={countDown}>-_-</Button>
      <Button onClick={countReset}>0_0</Button>
      <Button onClick={countUp}>+_+</Button>
      <span>{count}</span>
    </div>
  );
}
