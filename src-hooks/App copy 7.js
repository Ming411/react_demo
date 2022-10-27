import React, {memo, useState} from 'react';

const App = memo(() => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Foo />
    </div>
  );
});

const Foo = memo(function Foo() {
  console.log('fooooo');
  return <h3>FOO</h3>;
});

export default App;
