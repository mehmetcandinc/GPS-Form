import React, { useState } from 'react';
import { Input, Form, Tabs, Button, Radio, Checkbox } from 'antd';
import { Select } from 'antd';
import 'antd/dist/antd.css';

function Grup() {
  // Read data from JSON file, this will set db.data content

  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    fetch('/groupAdd', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    fetch('/getGroup', {
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
        label='Cihaz Grupları'
        name='name'
        rules={[{ required: true, message: 'Lütfen grup adı girin' }]}>
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

export default Grup;
