import React, {useState} from 'react';
import Test from './Test';
const App = () => {
  const [bool, setBool] = useState(true);
  return (
    <div>
      App
      <button onClick={() => setBool(!bool)}>change</button>
      <Test bool={bool} />
    </div>
  );
};

export default App;
