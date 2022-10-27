import React, {memo, useState, useCallback} from 'react';

const App = memo(() => {
  const [count, setCount] = useState(0);

  const resetCount = useCallback(() => {
    setCount(0);
    // 只有当依赖项改变时，这个函数才会重新创建
  }, [setCount]);
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Foo resetCount={resetCount} />
    </div>
  );
});

const Foo = memo(function Foo(props) {
  console.log('fooooo');
  return (
    <div>
      <h3>FOO</h3>
      <button onClick={props.resetCount}>reset</button>
    </div>
  );
});

export default App;
