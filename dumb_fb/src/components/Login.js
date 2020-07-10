import React from 'react'
import { Form, Input, Button,notification } from 'antd';
import './Login.css'
import axios from '../config/axios';
import LocalStorageService from '../services/localStorageService'

function Login() {

    const layout = {
        labelCol: { span: 7 },
        wrapperCol: { span: 13 },
    };
    const tailLayout = {
        wrapperCol: { offset: 10, span: 10 },
    };
    const onFinish = values => {
        axios.post('http://localhost:8000/users/login',values).then(res => {
            LocalStorageService.setToken(res.data.token)
            notification.success({ message: `Logged in as ${values.username}` })
        })
        console.log(values)
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="formWrapper">
            <Form className="outerLogin" style={{paddingTop:'30px'}}
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <h3 style={{ textAlign: 'center' }}>Login</h3>
                <br />
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
