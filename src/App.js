// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store';

const App = () => {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;

//위의 코드는 Redux Toolkit을 사용하여 카운터 애플리케이션의 UI를 구성하는 React 컴포넌트입니다.

// 먼저, React와 react-redux에서 useSelector와 useDispatch를 가져옵니다. useSelector는 Redux 스토어의 상태를 
// 선택하는 훅이고, useDispatch는 액션을 디스패치하는 훅입니다.

// App 컴포넌트는 함수형 컴포넌트로 정의되어 있습니다. 컴포넌트 내부에서 useSelector를 사용하여 Redux 스토어의
// counter 슬라이스 상태를 가져옵니다. 이를 count 변수에 할당합니다.

// useDispatch를 사용하여 디스패치 함수를 가져옵니다. 이를 dispatch 변수에 할당합니다.

// 리턴문에서는 카운터 애플리케이션의 UI를 구성합니다. <h1> 태그 내에 {count}를 통해 현재 카운터 값을 표시합니다. 
// 그리고 onClick 이벤트 핸들러를 사용하여 증가와 감소 버튼에 각각 increment와 decrement 액션을 디스패치하는 함수를 연결합니다.

// 이렇게 컴포넌트를 구성하면 Redux 스토어의 counter 슬라이스 상태를 읽고 액션을 디스패치하여 카운터를 증가시키거나 
// 감소시킬 수 있는 카운터 애플리케이션을 구현할 수 있습니다.
