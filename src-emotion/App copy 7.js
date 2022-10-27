import React from 'react';
import {css, keyframes} from '@emotion/react';
const move = keyframes`
0%{
  background-color: skyblue;
  left: 0;
  top: 0;
}
100%{
  background-color: tomato;
  left: 600px;
  top: 300px;
}
`;
const box = css`
  width: 100px;
  height: 100px;
  position: absolute;
  animation: ${move} 2s ease infinite alternate;
`;
const App = () => {
  return <div css={box}>App</div>;
};

export default App;
