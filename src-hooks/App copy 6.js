import React, {useMemo, useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(true);
  const doubleCount = useMemo(() => {
    console.log(1111);
    return count * 2;
    // 只有count依赖项改变才会重新执行
  }, [count]);
  return (
    <div>
      <h3>count--{count}</h3>
      <h3>doubleCount--{doubleCount}</h3>
      <h3>{bool ? '真' : '假'}</h3>
      <button onClick={() => setCount(count + 1)}>count+1</button>
      <button onClick={() => setBool(!bool)}>change</button>
    </div>
  );
};

export default App;
