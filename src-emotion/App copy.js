import {css} from '@emotion/react';
const style = css`
  width: 100px;
  height: 200px;
  background-color: skyblue;
`;
const stylee = css({
  width: 200,
  height: 200,
  background: 'pink'
});
const App = () => {
  return (
    <div>
      <h3 css={{color: 'red'}}>App</h3>
      <p css={style}>模板字符串</p>
      <p css={stylee}>对象形式</p>
    </div>
  );
};

export default App;
