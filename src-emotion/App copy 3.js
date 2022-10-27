import React from 'react';
import styled from '@emotion/styled';

function Demo({className}) {
  return <div className={className}>DEMO</div>;
}
// 这样操作会让 Demo组件 的 props中多一个 className 属性
const Fancy = styled(Demo)`
  color: red;
`;

const Fancyx = styled(Demo)({
  color: 'green'
});

const App = () => {
  return (
    <div>
      <Fancy />
      <Fancyx />
    </div>
  );
};

export default App;
