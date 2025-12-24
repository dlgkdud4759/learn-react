// 3. Store 생성

// Redux에서는 redux-toolkit 사용을 권장하기 때문에 deprecated로 표시 됨
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const store = configureStore({
  reducer: {
    counterStore: counterSlice.reducer,
  },
});

// store.getState가 리턴하는 타입을 RootState 타입으로 지정
export type RootState = ReturnType<typeof store.getState>;

export default store;
