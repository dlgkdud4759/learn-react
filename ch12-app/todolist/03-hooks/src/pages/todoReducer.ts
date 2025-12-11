import { produce } from "immer";
import type { TodoItem } from "./TodoItem";

// TodoAction 타입 참고
type TodoAction =
  | { type: "ADD"; value: TodoItem }
  | { type: "TOGGLE" | "DELETE"; value: Pick<TodoItem, "_id"> };

// 과제 3. 리듀서 함수를 만들어서 상태관리 로직을 작성하고
// TodoContainer 컴포넌트에서 useState대신 useReducer를 사용하도록 수정
// function todoReducer(state: TodoItem[], action: TodoAction) {
//   let newState;

//   switch (action.type) {
//     case "ADD":
//       newState = [...state, action.value];
//       break;
//     case "TOGGLE":
//       newState = state.map((item) =>
//         item._id === action.value._id ? { ...item, done: !item.done } : item
//       );
//       break;
//     case "DELETE":
//       newState = state.filter((item) => item._id !== action.value._id);
//       break;
//     default:
//       newState = state;
//       break;
//   }

//   return newState;
// }

// 과제 4. todoReducer에 immer 라이브러리를 이용해서 상태의 불변성을 유지하도록 수정
// function todoReducer(state: TodoItem[], action: TodoAction) {}
function todoReducer(state: TodoItem[], action: TodoAction) {
  let newState;
  const targetIndex = state.findIndex((item) => item._id === action.value._id);

  switch (action.type) {
    case "ADD":
      newState = produce(state, (draft) => {
        draft.push(action.value);
      });
      break;
    case "TOGGLE":
      newState = produce(state, (draft) => {
        draft[targetIndex].done = !draft[targetIndex].done;
      });
      break;
    case "DELETE":
      newState = produce(state, (draft) => {
        draft.splice(targetIndex, 1);
      });
      break;
    default:
      newState = state;
      break;
  }

  return newState;
}

export default todoReducer;
