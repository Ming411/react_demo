import React, {useState} from 'react';

/* 自定义Hook 完成value绑定和change事件 */
function useUpdateInput(initValue) {
  const [value, setValue] = useState(initValue);
  return {
    value,
    onChange: event => setValue(event.target.value)
  };
}

const App = () => {
  const usernameIpt = useUpdateInput('');
  const passwordIpt = useUpdateInput('');
  const handleSubmit = event => {
    event.preventDefault();
    console.log(usernameIpt.value);
    console.log(passwordIpt.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='username' {...usernameIpt} />
      <input type='password' name='password' {...passwordIpt} autoComplete='off' />
      <input type='submit' />
    </form>
  );
};

export default App;
