import React from 'react';
import {css, Global} from '@emotion/react';
import Demo from './Demo';

const styles = css`
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: red;
  }
`;

const App = () => {
  return (
    <div>
      <Global styles={styles} />
      <a href='#'>gogo</a>
      <Demo />
    </div>
  );
};

export default App;
