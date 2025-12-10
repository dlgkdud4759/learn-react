export interface CounterAction {
  type: "UP" | "DOWN" | "RESET";
  value: number;
}

// 리듀서 함수
// 현재 상태와 action 객체를 받아서 새로운 상태를 반환하는 순수 함수
// 상태 변경 로직은 컴포넌트 내부에 두지 않고 외부에서 구현
// state: 이전 상태
// action: 동작을 정의한 작업(자유롭게 작성, 일반적으로 type 속성에 동작을, value 속성에 값을 지정)
// 리턴값: 새로운 상태
// 호출 예시, CounterReducer(5, { type: 'UP', value: 3 }); -> 8
export function counterReducer(state: number, actions: CounterAction) {
  let newState = state;

  switch (actions.type) {
    case "UP":
      newState = state + actions.value;
      break;
    case "DOWN":
      newState = state - actions.value;
      break;
    case "RESET":
      newState = actions.value;
      break;
    default:
      newState = actions.value;
      break;
  }

  console.log(`${state} ${actions.type} ${actions.value} -> ${newState}`);
  return newState;
}

console.log(counterReducer(5, { type: "UP", value: 3 }) === 8);
console.log(counterReducer(5, { type: "DOWN", value: 3 }) === 8);
console.log(counterReducer(5, { type: "RESET", value: 3 }) === 10);
