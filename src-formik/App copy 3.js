import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
const App = () => {
  const initialValues = {username: '', content: '', subject: 'JAVA'};
  const handleSubmit = values => {
    console.log(values);
  };
  const schema = Yup.object({
    username: Yup.string().max(15, '用户名长度不能大于15').required('请输入用户名')
  });
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
      <Form>
        <Field name='username' />
        <ErrorMessage name='username' />
        <Field as='textarea' name='content' />
        <Field as='select' name='subject'>
          <option value='前端'>前端</option>
          <option value='JAVA'>JAVA</option>
        </Field>
        <input type='submit' />
      </Form>
    </Formik>
  );
};

export default App;
