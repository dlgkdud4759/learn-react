import { countDown, countReset, countUp } from "@/redux/counterSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Right3() {
  useEffect(() => {
    console.log("#### Right3 렌더링.");
  });

  // Redux store에 액션을 전달하기 위해 useDispatch 사용
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={() => dispatch(countUp(1))}>+1</button>
      <button onClick={() => dispatch(countReset())}>0</button>
      <button onClick={() => dispatch(countDown(1))}>-1</button>
      <button onClick={() => dispatch(countDown(2))}>-2</button>
      <button
        onClick={() => dispatch({ type: "myCounter/countUp", payload: 3 })}
      >
        +3
      </button>
    </div>
  );
}

export default Right3;
