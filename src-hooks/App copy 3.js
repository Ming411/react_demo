import React, {createContext, useContext} from 'react';

const countContext = createContext();

const App = () => {
  return (
    <countContext.Provider value={100}>
      <Foo />
    </countContext.Provider>
  );
};

function Foo() {
  const value = useContext(countContext);
  return <h3>{value}</h3>;
}

export default App;
