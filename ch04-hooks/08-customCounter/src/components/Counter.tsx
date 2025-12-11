import Button from "./Button";
import useCounter from "@/hooks/useCounter";

interface CounterProps {
  children: string;
}

function Counter({ children }: CounterProps) {
  console.log("\tCounter 호출됨.");

  const initCount = Number(children);

  const { count, step, handleStepChange, handleDown, handleUp, handleReset } =
    useCounter(initCount);

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
          onChange={(e) => handleStepChange(Number(e.target.value))}
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
