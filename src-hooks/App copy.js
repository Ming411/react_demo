import React, {useState} from 'react';

const App = props => {
  // 当接收值是一个函数时，函数只会被调用一次，用在初始值是动态值得情况下
  const [count, setCount] = useState(() => {
    return props.count || 0;
  });
  const [foo, setFoo] = useState(10);
  function handleCount() {
    setFoo(foo => {
      return foo + 1;
    });
  }

  return (
    <div>
      <h3>{count}</h3>
      <h3>{foo}</h3>
      {/* <button onClick={() => setFoo(foo + 10)}>go</button> */}
      <button onClick={handleCount}>go</button>
    </div>
  );
};

export default App;
