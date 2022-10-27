import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(1111);
  }, []);
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+1</button>
      {/* <button onClick={() => ReactDOM.unmountComponentAtNode(document.getElementById('root'))}>
        destory
      </button> */}
    </div>
  );
};

export default App;
