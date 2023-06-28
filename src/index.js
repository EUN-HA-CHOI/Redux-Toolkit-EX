// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// 위의 코드는 Redux 스토어를 애플리케이션에 연결하고, React 컴포넌트를 렌더링하는 엔트리 포인트인 `index.js` 파일입니다.

// 먼저, `React`와 `ReactDOM`에서 `ReactDOM.render`를 가져옵니다. 이 함수는 React 컴포넌트를 실제 DOM에 렌더링하는 역할을 합니다.

// `Provider`는 `react-redux`에서 제공하는 컴포넌트로, Redux 스토어를 애플리케이션에 제공하기 위해 사용됩니다.

// `store`는 `./store`에서 가져온 Redux 스토어 객체입니다. 이 스토어 객체는 애플리케이션의 상태와 리듀서들을 관리합니다.

// `App`은 `./App`에서 가져온 React 컴포넌트입니다. 이 컴포넌트는 Redux 스토어의 상태를 사용하고 액션을 디스패치할 수 
// 있는 카운터 애플리케이션 컴포넌트입니다.

// `ReactDOM.render` 함수를 사용하여 `<Provider>` 컴포넌트로 애플리케이션을 감싸고, `store` 속성에 Redux 스토어를 전달합니다. 
// 그리고 `<App />` 컴포넌트를 렌더링합니다. 이렇게 함으로써 Redux 스토어가 애플리케이션에 적용되고, `<App />` 컴포넌트에서 
// Redux 스토어를 사용할 수 있게 됩니다.

// 마지막으로, `document.getElementById('root')`는 index.html 파일의 루트 요소인 `<div id="root">`를 지정합니다. 
// 이 요소에 애플리케이션 컴포넌트가 렌더링될 것입니다.

// 이렇게 `index.js` 파일에서 Redux 스토어를 연결하고 React 컴포넌트를 렌더링함으로써 Redux를 사용하는 애플리케이션을 초기화합니다.