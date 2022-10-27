import React, {useState, useRef, useEffect} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  // let timeId = null;  // 由于每次重新设置值都会重新渲染组件，所以会一致为null
  const timeId = useRef();
  useEffect(() => {
    timeId.current = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
  }, []);
  const stopCount = () => {
    clearInterval(timeId.current);
  };
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={stopCount}>stop</button>
    </div>
  );
};

export default App;
