// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// 위의 코드는 Redux Toolkit을 사용하여 카운터 상태를 관리하는 스토어를 생성하는 코드입니다.

// 먼저, configureStore와 createSlice 함수를 가져옵니다. configureStore는 Redux 스토어를 생성하는 함수이고, 
// createSlice는 Redux Toolkit에서 슬라이스를 생성하는 함수입니다.

// counterSlice는 createSlice 함수를 사용하여 생성된 슬라이스입니다. 슬라이스는 이름, 
// 초기 상태 및 리듀서들을 포함합니다. 여기서 슬라이스의 이름은 'counter'이며, 초기 상태는 0으로 설정되어 있습니다.
//  리듀서는 increment와 decrement 액션에 대한 동작을 정의합니다. increment 액션이 발생하면 상태를 1 증가시키고, decrement 액션이 발생하면 상태를 1 감소시킵니다.

// counterSlice.actions에서는 increment와 decrement 액션 크리에이터(액션 생성 함수)를 가져옵니다. 
// 이를 통해 나중에 컴포넌트에서 액션을 디스패치할 수 있습니다.

// counterSlice.reducer는 슬라이스의 리듀서를 가져옵니다. 리듀서는 액션을 처리하여 상태를 업데이트하는 함수입니다.

// 마지막으로, configureStore 함수를 사용하여 스토어를 생성합니다. reducer 속성에는 counterSlice.reducer를 등록하여 
// 스토어에 카운터 슬라이스의 리듀서를 등록합니다.

// 스토어는 store 변수에 저장되며, 이를 외부에서 임포트하여 애플리케이션의 Redux 스토어로 사용할 수 있습니다.