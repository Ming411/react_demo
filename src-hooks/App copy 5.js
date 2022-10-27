import React, {useEffect} from 'react';
const App = () => {
  useEffect(() => {
    (async function () {
      const res = await getData();
      console.log(res);
    })();
  }, []);
  return <div>APP</div>;
};
function getData() {
  return new Promise((resolve, reject) => {
    resolve({msg: 'hello'});
  });
}

export default App;
