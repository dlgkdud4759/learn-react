import { useReducer, useState } from "react";
import Button from "./Button";
import { counterReducer } from "@/reducers";

interface CounterProps {
  children: string;
}

function Counter({ children }: CounterProps) {
  console.log("\tCounter 호출됨.");

  const initCount = Number(children);
  // const [count, setCount] = useState(initCount);
  const [count, countDispatch] = useReducer(counterReducer, initCount);
  const [step, setStep] = useState(1);

  // 카운트 감소
  const handleDown = () => {
    countDispatch({ type: "DOWN", value: step });
  };

  // 카운트 증가
  const handleUp = () => {
    countDispatch({ type: "UP", value: step });
  };

  // 카운트 초기화
  const handleReset = () => {
    countDispatch({ type: "RESET", value: initCount });
  };

  // const handleChangeStep = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setStep(Number(e.target.value))
  // }

  return (
    <>
      <div id="counter">
        <label htmlFor="step">증감치</label>
        <input
          id="step"
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <Button bgColor="red" onClick={handleDown}>
          -_-
        </Button>
        <Button bgColor="gray" onClick={handleReset}>
          0_0
        </Button>
        <Button bgColor="blue" onClick={handleUp}>
          +_+
        </Button>
        <span>{count}</span>
      </div>
    </>
  );
}

export default Counter;
