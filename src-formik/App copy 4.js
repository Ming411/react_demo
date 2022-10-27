import React from 'react';
import {Formik, Form, useField} from 'formik';
import * as Yup from 'yup';

function MyInput({label, ...props}) {
  const [field, meta] = useField(props);
  // console.log(field);  // ipt属性
  // console.log(meta); // 验证相关
  return (
    <div>
      <label htmlFor={props.id}>{label}</label>
      <input {...field} {...props} autoComplete='off' />
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </div>
  );
}

const App = () => {
  const initialValues = {password: ''};
  const handleSubmit = values => {
    console.log(values);
  };
  const schema = Yup.object({
    password: Yup.string().min(6, '密码长度不能小于6').required('请输入密码')
  });
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
      <Form>
        <MyInput
          id='myPassword'
          label='密码'
          name='password'
          type='password'
          palceholder='请输入密码'
        />

        <input type='submit' />
      </Form>
    </Formik>
  );
};

export default App;
