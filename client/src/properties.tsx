import React, { useState } from 'react';
import { Input, Form, Tabs, Button, Radio, Checkbox } from 'antd';
import { Select } from 'antd';
import 'antd/dist/antd.css';

type RequiredMark = boolean | 'optional';

function Properties() {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>('optional');

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
    fetch('/propertiesAdd', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      layout='vertical'
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 6 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'>
      <Form.Item
        label='Cihaz Özellik Adı'
        name='name'
        rules={[{ required: true, message: 'Lütfen Özellik adı girin' }]}>
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Properties;
