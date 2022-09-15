import React, { useState } from "react";
import { Tabs, Select, Form, Input, Button, Col, Row, } from 'antd';
import 'lowdb'

type RequiredMark = boolean | 'optional';

const Form1 = () => {
    const [cihaz, setCihaz] = useState();
    const [model, setModel] = useState();
    const [versiyon, setVersiyon] = useState();
    const [formInfo, setFormInfo] = useState<string[]>([]);

    const Info = (e: any) => {
        e.preventDefault();

        setFormInfo((prev: any) => {

            return [
                ...prev,
                [
                    cihaz,
                    model,
                    versiyon,
                ],
            ];
        });
    };

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
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (

        <Form
            name="basic"
            style={{ padding: 10 }}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 6 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <Form.Item
                label="Cihaz Adı"
                name="cihazadi"
                rules={[{ required: true, message: 'Lütfen Cihaz Adını Giriniz.' }]}>
                <Input placeholder="Cihaz Adını Giriniz." size="large" onChange={(e: any) => {
                    setCihaz(e.currentTarget.value);
                }} />
            </Form.Item>
            <Form.Item
                label="Model"
                name="model"
                rules={[{ required: true, message: 'Lütfen Model Adını Giriniz.' }]}>
                <Input placeholder="Model Adını Giriniz." size="large" onChange={(e: any) => { setModel(e.currentTarget.value) }} />
            </Form.Item>
            <Form.Item
                label="Versiyon"
                name="versiyon"
            >
                <Input placeholder="Versiyon Giriniz." size="large" onChange={(e: any) => { setVersiyon(e.currentTarget.value) }} />
            </Form.Item>
            <Row>
                <Col span={6} style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType='submit' shape="round" >Primary Button</Button>
                </Col>
            </Row>
        </Form>
    )
}




export default Form1