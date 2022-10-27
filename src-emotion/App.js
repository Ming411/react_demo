import React from 'react';
import {css, useTheme} from '@emotion/react';
const primaryColor = props => css`
  color: ${props.colors.primary};
`;

const App = () => {
  console.log(useTheme()); // 方式二
  return <div css={primaryColor}>App</div>;
};

export default App;
