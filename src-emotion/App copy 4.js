import React from 'react';
import styled from '@emotion/styled';

const Child = styled.div`
  color: pink;
`;
const Parent = styled.div`
  &:hover {
    background-color: red;
  }
  ${Child} {
    color: green;
  }
`;

/* const Child = styled.div({
  color: 'pink'
});
const Parent = styled.div({
  [Child]: {
    color: 'blue'
  }
}); */

const App = () => {
  return (
    <div>
      <Child>child</Child>
      <Parent>
        <Child>parent child</Child>
      </Parent>
    </div>
  );
};

export default App;
