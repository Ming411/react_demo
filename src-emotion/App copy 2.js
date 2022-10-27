import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  width: 300px;
  height: 30px;
  background: ${props => props.bgColor || 'pink'};
`;
/* const Container = styled.div({
  width: 1000,
  margin: '0 auto'
}); */
/* const Container = styled.div(props => ({
  width: props.w || 1000,
  margin: '0 auto'
})); */
const Container = styled.div(
  {
    // 默认值
    width: 1000,
    background: 'pink'
  },
  props => ({
    width: props.w,
    background: props.bgColor
  })
);

const App = () => {
  return (
    <div>
      <Container w={500}>
        <Button bgColor='orange'>我是按钮</Button>
      </Container>
    </div>
  );
};

export default App;
