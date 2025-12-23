// 3. Store 생성

// Redux에서는 redux-toolkit 사용을 권장하기 때문에 deprecated로 표시 됨
import { createStore } from "redux";
import { counterReducer } from "./counterReducer";

const store = createStore(counterReducer);

// store.getState가 리턴하는 타입을 RootState 타입으로 지정
export type RootState = ReturnType<typeof store.getState>;

export default store;
