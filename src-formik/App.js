import React from 'react';
import {Formik, Form, useField} from 'formik';
import * as Yup from 'yup';

function CheckBox({label, ...props}) {
  const [field, meta, helper] = useField(props);
  const {value} = meta; // 复选框所勾选的选项
  const {setValue} = helper; // 设置选中值
  const handleChange = () => {
    const set = new Set(value); // set不会出现重复的元素
    if (set.has(props.value)) {
      set.delete(props.value);
    } else {
      set.add(props.value);
    }
    setValue([...set]);
  };
  return (
    <div>
      <label htmlFor=''>
        <input
          checked={value.includes(props.value)} // 设置默认勾选
          type='checkbox'
          {...props}
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  );
}

const App = () => {
  const initialValues = {hobbies: ['足球']};
  const handleSubmit = values => {
    console.log(values);
  };
  const schema = Yup.object({});
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
      <Form>
        <CheckBox name='hobbies' value='足球' label='足球' />
        <CheckBox name='hobbies' value='橄榄球' label='橄榄球' />
        <CheckBox name='hobbies' value='篮球' label='篮球' />
        <input type='submit' />
      </Form>
    </Formik>
  );
};

export default App;
