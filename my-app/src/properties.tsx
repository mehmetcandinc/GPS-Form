import React, { useState } from 'react';
import { Input, Form, Tabs, Button, Radio } from 'antd';
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

  return (
    <Form
      form={form}
      layout='vertical'
      initialValues={{ requiredMarkValue: 'requiredMark' }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}>
      <Input placeholder='Basic usage' />
    </Form>
  );
}

export default Properties;
