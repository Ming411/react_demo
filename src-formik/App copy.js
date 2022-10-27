import React from 'react';
import {useFormik} from 'formik';
const App = () => {
  const formik = useFormik({
    initialValues: {username: '', password: ''},
    validate: values => {
      const errors = {};
      if (!values.username) {
        errors.username = '请输入用户名';
      } else if (values.username.length > 15) {
        errors.username = '用户名长度不能大于15';
      }
      if (values.password.length < 6) {
        errors.password = '密码长度不能小于6';
      }
      return errors;
    },
    onSubmit: values => {
      // values就是最新的数据
      console.log(values);
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type='text'
        name='username'
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} // 失去焦点时触发验证
      />
      {/* formik.touched.username 该数据是否被修改 */}
      <p>{formik.touched.username && formik.errors.username ? formik.errors.username : ''}</p>
      <input
        type='password'
        name='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        autoComplete='off'
      />
      <p>{formik.touched.password && formik.errors.password ? formik.errors.password : ''}</p>
      <input type='submit' />
    </form>
  );
};

export default App;
