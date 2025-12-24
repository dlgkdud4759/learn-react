import useCounterStore from "@/zustand/store";
import { useEffect } from "react";

function Right3() {
  useEffect(() => {
    console.log("#### Right3 렌더링.");
  });

  // 상태 전체를 구독함
  // const { countUp, countDown, countReset } = useCounterStore();

  // 최적화를 위해서 필요한 상태만 선택적으로 구독
  const countUp = useCounterStore((state) => state.countUp);
  const countReset = useCounterStore((state) => state.countReset);
  const countDown = useCounterStore((state) => state.countDown);

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={() => countUp(1)}>+1</button>
      <button onClick={() => countReset()}>0</button>
      <button onClick={() => countDown(1)}>-1</button>
    </div>
  );
}

export default Right3;
